import { describe, expect, test} from '@jest/globals';
import { ingredientsSlice, fetchIngredients } from './ingredientsSlice';
import { ingredientsInitialState, mockIngredientsResponse } from './mockData';
import { mockIngredients } from '../../../cypress/fixtures/mockIngredients';

describe('тестирование асинхронного экшена fetchIngredients', () => {
    test('загрузка списка ингредиентов (pending)', () => {
      const newState = ingredientsSlice.reducer(ingredientsInitialState, fetchIngredients.pending(''));
      expect(newState.isIngredientsLoading).toBe(true);
    })

    test('загрузка списка ингредиентов (rejected)', () => {
      const newState = ingredientsSlice.reducer(ingredientsInitialState, fetchIngredients.rejected({
        name: '',
        message: ''
      }, ''));
      expect(newState.isIngredientsLoading).toBe(false);
    })

     test('загрузка списка ингредиентов (fulfilled)', () => {
      const newState = ingredientsSlice.reducer(ingredientsInitialState, fetchIngredients.fulfilled(mockIngredientsResponse.data, ''));
      expect(newState.isIngredientsLoading).toBe(false);
      expect(newState.ingredientsList).toEqual(mockIngredients);
      
    })
})
