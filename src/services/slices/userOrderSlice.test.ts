import { describe, expect, test} from '@jest/globals';
import { userOrdersSlice, fetchUserOrders } from './userOrdersSlice';
import {
  userOrdersInitialState,
  mockUserOrdersResponse,
  mockUserOrders
} from './mockData';


describe('тестирование асинхронного экшена fetchUserOrders', () => {
    test('загрузка списка заказов пользователя (pending)', () => {
      const newState = userOrdersSlice.reducer(userOrdersInitialState, fetchUserOrders.pending(''));
      expect(newState.isUserOrdersLoading).toBe(true);
    })

    test('загрузка списка заказов пользователя (rejected)', () => {
      const newState = userOrdersSlice.reducer(userOrdersInitialState, fetchUserOrders.rejected({
        name: '',
        message: ''
      }, ''));
      expect(newState.isUserOrdersLoading).toBe(false);
    })

     test('загрузка списка заказов пользователя (fulfilled)', () => {
      const newState = userOrdersSlice.reducer(userOrdersInitialState, fetchUserOrders.fulfilled(mockUserOrdersResponse.orders, ''));
      expect(newState.isUserOrdersLoading).toBe(false);
      expect(newState.userOrders).toEqual(mockUserOrders);
      
    })
})
