import { initApp } from './initApp.cy';

export const addIngredient = (ingredient: string) => {
  cy.get(`[data-cy='${ingredient}'] button`).click();
}

const deleteIngredient = (indexOfIngredient: number = 0) => {
  cy.get('.constructor-element__action').eq(indexOfIngredient).click();
}

describe('проверка функциональности бургер-конструктора', () => {
    
    beforeEach(() => {
      initApp();
    })

    it('в конструктор корректно добавляется ингредиент (начинка)', () => {
      addIngredient('Хрустящие минеральные кольца');
      cy.get('.constructor-element').should('have.length', 1);
      cy.get('.constructor-element').contains('Хрустящие минеральные кольца');
    });

    it('в конструктор добавляются несколько одинаковых ингредиентов (начинок)', () => {
      addIngredient('Соус с шипами Антарианского плоскоходца');
      addIngredient('Соус с шипами Антарианского плоскоходца');
      cy.get('.constructor-element').should('have.length', 2);
      cy.get('.constructor-element').contains('Соус с шипами Антарианского плоскоходца');
    });

    it('в конструктор корректно добавляется булка (2 штуки)', () => {
      addIngredient('Флюоресцентная булка R2-D3');
      cy.get('.constructor-element').should('have.length', 2);
      cy.get('.constructor-element').contains('Флюоресцентная булка R2-D3');
    });

    it('в конструктор невозможно добавить второй тип булки', () => {
      addIngredient('Флюоресцентная булка R2-D3');
      cy.get('.constructor-element').should('have.length', 2);
      addIngredient('Краторная булка N-200i');
      cy.get('.constructor-element').should('have.length', 2);
      cy.get('.constructor-element').contains('Краторная булка N-200i');
    });  

    it('из конструктора корректно удаляется ингредиент (начинка)', () => {
      addIngredient('Соус традиционный галактический');
      cy.get('.constructor-element').should('have.length', 1);
      deleteIngredient();
      cy.get('.constructor-element').should('not.exist');
    });

    it('из конструктора корректно удаляется один ингредиент (начинка) из нескольких идентичных', () => {
      addIngredient('Говяжий метеорит (отбивная)');
      addIngredient('Говяжий метеорит (отбивная)');
      addIngredient('Говяжий метеорит (отбивная)');
      cy.get('.constructor-element').should('have.length', 3);
      deleteIngredient();
      cy.get('.constructor-element').should('have.length', 2);
    });

    it('из конструктора невозможно удалить булку', () => {
      addIngredient('Краторная булка N-200i');
      cy.get('.constructor-element').should('have.length', 2);
      deleteIngredient();
      cy.get('.constructor-element').should('have.length', 2);
    });

    it('счетчик ингредиента отражает правильное число ингредиентов данного типа в конструктуоре (при добавлении ингредиентов)', () => {
      addIngredient('Хрустящие минеральные кольца');
      addIngredient('Хрустящие минеральные кольца');
      addIngredient('Хрустящие минеральные кольца');
      addIngredient('Хрустящие минеральные кольца');
      addIngredient('Краторная булка N-200i');
      cy.get('.constructor-element').should('have.length', 6);
      cy.get("[data-cy='Хрустящие минеральные кольца'] .counter__num").contains('4'); 
      cy.get("[data-cy='Краторная булка N-200i'] .counter__num").contains('2');
    });

    it('счетчик ингредиента отражает правильное число ингредиентов данного типа в конструкторе (при удалении ингредиентов)', () => {
      addIngredient('Соус традиционный галактический');
      addIngredient('Соус традиционный галактический');
      addIngredient('Соус традиционный галактический');
      addIngredient('Соус традиционный галактический');
      addIngredient('Краторная булка N-200i');
      deleteIngredient();
      deleteIngredient(1);
      deleteIngredient(2);
      cy.get("[data-cy='Соус традиционный галактический'] .counter__num").contains('2');
      cy.get("[data-cy='Краторная булка N-200i'] .counter__num").contains('2'); 
    });

    it('цена бургера корректно отражается в конструкторе', () => {
      addIngredient('Хрустящие минеральные кольца');
      addIngredient('Соус традиционный галактический');
      addIngredient('Соус традиционный галактический');
      addIngredient('Краторная булка N-200i');
      cy.get("[data-cy='orderPrice']").contains('2840');
      deleteIngredient(1);
      cy.get("[data-cy='orderPrice']").contains('2540');
      deleteIngredient(2);
      cy.get("[data-cy='orderPrice']").contains('2525');
    });
})
    
