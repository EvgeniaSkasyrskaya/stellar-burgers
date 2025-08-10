import { describe, expect, test} from '@jest/globals';
import {
  constructorSlice,
  addIngredient,
  deleteIngredient,
  completeOrder,
  orderBurger
} from './constructorSlice';
import { 
  initialEmptyState,
  initialNonEmptyState,
  initialStateWuthDuplicateIngredient,
  newBun,
  newIngredient,
  stateWithOnlyBun,
  stateWithNewBun,
  ingredientToDelete,
  bunToDelete,
  stateAfterDeletingDuplicateIngredient,
  orderResponse,
  orderCompound
} from './mockData';

describe('тестирование функции добавления ингредиента (addIngredient)', () => {
    test('добавление булки в пустой конструктор', () => {
      const newState = constructorSlice.reducer(initialEmptyState, addIngredient(newBun));
      expect(newState).toEqual(stateWithOnlyBun);
    }),

    test('добавление булки в конструктор c уже выбранной булкой (происходит замена)', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, addIngredient(newBun));
      expect(newState).toEqual(stateWithNewBun);
    }),

    test('добавление начинки в пустой конструктор', () => {
      const newState = constructorSlice.reducer(initialEmptyState, addIngredient(newIngredient));
      expect(newState.constructorItems.ingredients.length).toBe(1);
      expect(newState.constructorItems.ingredients).toContainEqual(expect.objectContaining({ _id: newIngredient._id }));
    }),

    test('добавление начинки в конструктор c уже выбранными ингредиентами', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, addIngredient(newIngredient));
      expect(newState.constructorItems.ingredients.length).toBe(initialNonEmptyState.constructorItems.ingredients.length + 1);
      expect(newState.constructorItems.ingredients).toContainEqual(expect.objectContaining({ _id: newIngredient._id }));
    })

})

describe('тестирование функции удаления ингредиента (deleteIngredient)', () => {
    test('удаление одиночного ингредиента из конструктора (проверка состава)', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, deleteIngredient(ingredientToDelete));
      expect(newState.constructorItems.ingredients.length).toBe(initialNonEmptyState.constructorItems.ingredients.length - 1);
      expect(newState.constructorItems.ingredients).not.toContain(ingredientToDelete);
    }),

    test('удаление дубликата ингредиента из конструктора', () => {
      const newState = constructorSlice.reducer(initialStateWuthDuplicateIngredient, deleteIngredient(ingredientToDelete));
      expect(newState).toEqual(stateAfterDeletingDuplicateIngredient);
    }),
    
    test('попытка удаления булки из конструктора', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, deleteIngredient(bunToDelete));
      expect(newState).toEqual(initialNonEmptyState);
    })
})

describe('тестирование функции сброса конструктора (completeOrder)', () => {
    test('сброс конструктора', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, completeOrder());
      expect(newState.orderModalData).toBe(null);
    })
})

describe('тестирование асинхрохронных экшенов', () => {
    test('отправка заказа на сервер (pending)', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, orderBurger.pending('',orderCompound));
      expect(newState.isOrderProcessing).toBe(true);
    }),

    test('отправка заказа на сервер (rejected)', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, orderBurger.rejected({
        name: '',
        message: ''
      }, '', orderCompound));
      expect(newState.isOrderProcessing).toBe(false);
    })

     test('отправка заказа на сервер (fulfilled)', () => {
      const newState = constructorSlice.reducer(initialNonEmptyState, orderBurger.fulfilled(orderResponse, '', orderCompound));
      expect(newState.isOrderProcessing).toBe(false);
      expect(newState.orderModalData).toEqual(orderResponse.order);
      expect(newState.constructorItems.bun).toBe(null);
      expect(newState.constructorItems.ingredients).toEqual([]);
      expect(newState.price).toBe(0);
    })
})
