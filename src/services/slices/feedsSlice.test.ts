import { describe, expect, test} from '@jest/globals';
import {
  feedsSlice,
  fetchFeeds,
  getOrderByNumber
} from './feedsSlice';
import {
  feedsInitialState,
  mockFeedsResponse,
  mockOrderNumber,
  mockOrderByNumberResponse
} from './mockData';
import { mockFeeds } from '../../../cypress/fixtures/mockFeeds';

describe('тестирование асинхронного экшена fetchFeeds', () => {
    test('загрузка списка заказов (pending)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, fetchFeeds.pending(''));
      expect(newState.isFeedsLoading).toBe(true);
    })

    test('загрузка списка заказов (rejected)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, fetchFeeds.rejected({
        name: '',
        message: ''
      }, ''));
      expect(newState.isFeedsLoading).toBe(false);
    })

     test('загрузка списка заказов (fulfilled)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, fetchFeeds.fulfilled(mockFeedsResponse, ''));
      expect(newState.isFeedsLoading).toBe(false);
      expect(newState.feeds.orders).toEqual(mockFeeds.orders);
      expect(newState.feeds.total).toBe(mockFeeds.total);
      expect(newState.feeds.totalToday).toBe(mockFeeds.totalToday);
    })
})

describe('тестирование асинхронного экшена getOrderByNumber', () => {
    test('загрузка информации по номеру заказа (pending)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, getOrderByNumber.pending('', mockOrderNumber));
      expect(newState.isOrderLoading).toBe(true);
    })

    test('загрузка информации по номеру заказа  (rejected)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, getOrderByNumber.rejected({
        name: '',
        message: ''
      }, '', mockOrderNumber));
      expect(newState.isOrderLoading).toBe(false);
    })

     test('загрузка информации по номеру заказа  (fulfilled)', () => {
      const newState = feedsSlice.reducer(feedsInitialState, getOrderByNumber.fulfilled(mockOrderByNumberResponse, '', mockOrderNumber));
      expect(newState.isOrderLoading).toBe(false);
      expect(newState.orderForView.orders).toEqual(mockOrderByNumberResponse.orders)
    })
})
