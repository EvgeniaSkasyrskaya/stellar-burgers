import { initApp } from './initApp.cy';

const openModal = (ingredient: string) => {
  cy.get(`[data-cy='${ingredient}']`).click();
}

describe('проверка функциональности модального окна с подробной информацией об ингредиенте', () => {
    
    beforeEach(() => {
        initApp();
    })
    
    it('модальное окно становится видимым при клике по карточке ингредиента', () => {
        openModal('Хрустящие минеральные кольца');
        cy.get('[data-cy="modal"]').should('be.visible');
    })
        
    it('в модальном окне отображаются данные того ингредиента, карточку которого кликнули', () => {
        openModal('Флюоресцентная булка R2-D3');
        cy.get('[data-cy="modal"]').contains('Флюоресцентная булка R2-D3');
    })

    it('модальное окно закрывается по клику на крестик', () => {
        openModal('Соус традиционный галактический');
        cy.get("[data-cy='modalCloseButton']").click();
        cy.get("[data-cy='modal']").should('not.exist');
    })

    it('модальное окно закрывается по клику на оверлей', () => {
        openModal('Краторная булка N-200i');
        cy.get("[data-cy='modalOverlay']").click({ force: true });
        cy.get("[data-cy='modal']").should('not.exist');
    })

})
