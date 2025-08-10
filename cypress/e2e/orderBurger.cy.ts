import { mockOrder } from '../fixtures/mockOrder';
import { initApp, initAppWithAuthUser } from './initApp.cy';
import { addIngredient } from './burgerConstructor.cy';

const selectBurgerConponents = () => {
  addIngredient('Флюоресцентная булка R2-D3');
  addIngredient('Хрустящие минеральные кольца');
  addIngredient('Соус традиционный галактический');
  addIngredient('Соус с шипами Антарианского плоскоходца');
}

const clickOrderButton = () => {
  cy.intercept('POST', '/api/orders').as('requests');
  cy.get("[data-cy='orderButton']").click();
}

const orderBurger = () => {
  cy.intercept('POST', '/api/orders', {
    statusCode: 200,
    body: {
      success: mockOrder.success,
      name: mockOrder.name,
      order: mockOrder.order
    }
  }).as('mockOrderResponse');
  cy.get("[data-cy='orderButton']").click();
  cy.wait('@mockOrderResponse');
}

describe('проверка корректности оформления заказа', () => {
          
    it('при нажатии кнопки заказа неавторизованным пользователем он перенаправляется на страницу авторизации', () => {
      initApp();
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      selectBurgerConponents();
      clickOrderButton();
      cy.get('@requests').should('be.null');  
      cy.url().should('include', '/login');
    });

    it('нельзя оформить заказ, если не выбрана булка (при нажатии кнопки заказа никакие запросы не отправляются)', () => {
      initAppWithAuthUser();
      addIngredient('Хрустящие минеральные кольца');
      cy.get("[data-cy='textBunNotSelected']").contains('Выберите булки');
      clickOrderButton();
      cy.get('@requests').should('be.null');
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
    });

    it('корректное оформление заказа (появление модального окна с информацией о заказе, очищение конструктора))', () => {
      initAppWithAuthUser();
      selectBurgerConponents();
      cy.get("[data-cy='orderPrice']").contains('2379');
      orderBurger();
      cy.get("[data-cy='modal']").should('be.visible');
      cy.get("[data-cy='orderNumber']").contains(mockOrder.order.number);
      cy.get('.constructor-element').should('have.length', 0);
      cy.get("[data-cy='orderPrice']").contains('0');
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
    });
})

describe('проверка закрытия модального окна с информацией о заказе', () => {
      
    beforeEach(() => {
      initAppWithAuthUser();
      selectBurgerConponents();
      orderBurger();
      const orderSuccessModal = cy.get("[data-cy='modal']");
      orderSuccessModal.should('be.visible');
    })
  
    afterEach(() => {
      cy.get("[data-cy='modal']").should('not.exist');
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
    })
  
    it('модальное окно закрывается при нажатии на кнопку-крестик', () => {
      cy.get("[data-cy='modalCloseButton']").click();
    });

    it('модальное окно закрывается при клике по оверлею', () => {
      cy.get("[data-cy='modalOverlay']").click({ force: true });
    });

})