import { describe, expect, test} from '@jest/globals';
import { rootReducer, RootState } from './store';
import { initialState as constructorInitialState } from './slices/constructorSlice';
import { initialState as ingredientsInitialState } from './slices/ingredientsSlice';
import { initialState as feedsInitialState } from './slices/feedsSlice';
import { initialState as userInfoInitialState } from './slices/userInfoSlice';
import { initialState as userOrdersInitialState } from './slices/userOrdersSlice';
import { TIngredient } from '@utils-types';

describe('rootReducer', () => {
  const initialRootState: RootState = {
    ingredients: ingredientsInitialState,
    burgerConstructor: constructorInitialState,
    feeds: feedsInitialState,
    userInfo: userInfoInitialState,
    userOrders: userOrdersInitialState
  } 
    
  test('обработка некорректного экшена', () => {
    expect(rootReducer(initialRootState, { type: 'unknownActionType' })).toEqual(initialRootState);
  });

  test('инициализация начального состояния некорректным экшеном', () => {
    const newRootState = rootReducer(undefined, { type: 'unknownActionType' });
    expect(newRootState).toEqual(initialRootState);
  });

  test('инициализация начального состояния корректным экшеном', () => {
    const mockIngredients: TIngredient[] = [
          {
            _id: '643d69a5c3f7b9001cfa093d',
            name: 'Флюоресцентная булка R2-D3',
            type: 'bun',
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: 'https://code.s3.yandex.net/react/code/bun-01.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png'
          },
          {
            _id: '643d69a5c3f7b9001cfa0944',
            name: 'Соус традиционный галактический',
            type: 'sauce',
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png'
          },
          {
            _id: '643d69a5c3f7b9001cfa0946',
            name: 'Хрустящие минеральные кольца',
            type: 'main',
            proteins: 808,
            fat: 689,
            carbohydrates: 609,
            calories: 986,
            price: 300,
            image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/mineral_rings-large.png',
          },
          {
            _id: '643d69a5c3f7b9001cfa0945',
            name: 'Соус с шипами Антарианского плоскоходца',
            type: 'sauce',
            proteins: 101,
            fat: 99,
            carbohydrates: 100,
            calories: 100,
            price: 88,
            image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png'
          }
        ];
    const newRootState = rootReducer(undefined, { type: 'ingredients/fetch/fulfilled', payload: mockIngredients });
    expect(newRootState.ingredients.ingredientsList).toEqual(mockIngredients);
    expect(newRootState.ingredients.isIngredientsLoading).toBeFalsy;
  });

  test ('обработка корректного экшена userChecked', () => {
    const newRootState = rootReducer(initialRootState, { type: 'userInfo/userChecked' });
    expect(newRootState.userInfo.isUserChecked).toBeTruthy;
  });
});