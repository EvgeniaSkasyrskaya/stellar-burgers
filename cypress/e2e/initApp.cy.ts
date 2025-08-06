import { mockIngredients } from '../fixtures/mockIngredients';
import { mockFeeds } from '../fixtures/mockFeeds';
import { mockTokenResponse } from '../fixtures/mockToken';
import { mockUserResponse, } from '../fixtures/mokUser';

export const initApp = () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.intercept('GET', '/api/ingredients', {
    statusCode: 200,
    body: {
      success: true,
      data: mockIngredients
    }
  }).as('mockIngredientResponse');
  cy.intercept('GET', '/api/orders/all', {
    statusCode: 200,
    body: {
      success: true,
      orders: mockFeeds.orders,
      total: mockFeeds.total,
      totalToday: mockFeeds.totalToday
    }
  }).as('mockFeedsResponse');
  cy.visit('http://localhost:4000');
  cy.wait('@mockIngredientResponse');
  cy.wait('@mockFeedsResponse');
}

export const initAppWithAuthUser = () => {
  cy.setCookie('accessToken', mockTokenResponse.accessToken);
  window.localStorage.setItem('refreshToken', mockTokenResponse.refreshToken);  
  cy.intercept('GET', 'api/auth/user', {
    statusCode: 200,
    body: {
      succes: mockUserResponse.success,
      user: {
        email: mockUserResponse.user.email,
        name: mockUserResponse.user.name
      }
    }
  }).as('mockUserResponse');
  cy.intercept('POST', 'api/auth/token', {
    statusCode: 200,
    body: {
      success: mockTokenResponse.success,
      accessToken: mockTokenResponse.accessToken,
      refreshToken: mockTokenResponse.refreshToken
    }
  }).as('mockTokenResponse');
  cy.intercept('GET', '/api/ingredients', {
    statusCode: 200,
    body: {
      success: true,
      data: mockIngredients
    }
  }).as('mockIngredientResponse');
  cy.intercept('GET', '/api/orders/all', {
    statusCode: 200,
    body: {
      success: true,
      orders: mockFeeds.orders,
      total: mockFeeds.total,
      totalToday: mockFeeds.totalToday
    }
  }).as('mockFeedsResponse');
  cy.visit('http://localhost:4000');
  cy.wait('@mockUserResponse');
  cy.wait('@mockIngredientResponse');
  cy.wait('@mockFeedsResponse');
}

describe('проверка корректности инициализации приложения', () => {
          
    it('корректно загружается и отображается список ингредиентов', () => {
      initApp();
      cy.get("[data-cy='burgerIngredientImage']").should('have.length', 6);
    });

    it('корректно загружается и отображается список заказов', () => {
      initApp();
      const feedsListIcon = cy.get("[data-cy='feedsListIcon']");
      feedsListIcon.click();
      cy.get("[data-cy='orderCard']").should('have.length', 5);
    });
    
    it('корректно отражается имя авторизованного пользователя в шапке страницы', () => {
      initAppWithAuthUser();
      const userProfileIcon = cy.get("[data-cy='userProfileIcon']");
      userProfileIcon.contains(`${mockUserResponse.user.name}`);
      userProfileIcon.click();
      cy.url().should('include', '/profile');
    });

})
