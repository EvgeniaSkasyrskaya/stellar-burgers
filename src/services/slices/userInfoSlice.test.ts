import { describe, expect, test} from '@jest/globals';
import {
  userInfoSlice,
  registerUser,
  loginUser,
  updateUserData,
  getUser,
  logoutUser,
  userChecked
} from './userInfoSlice';
import { 
  userInfoInitialState,
  mockRegisterData,
  mockLoginData,
  mockAuthResponse,
  mockUserResponse
} from './mockData';

describe('тестирование функции, фиксирующей факт проверки пользователя (userCheked)', () => {
    test('проверка пользователя произведена', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, userChecked());
      expect(newState.isUserChecked).toBeTruthy;
    })
})

describe('тестирование асинхрохронного экшена получения данных пользователя с сервера (getUser)', () => {
    test('получение данных пользователя с сервера (pending)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, getUser.pending(''));
      expect(newState.isFetching).toBeTruthy;
    }),

    test('получение данных пользователя с сервера (rejected)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, getUser.rejected({
        name: '',
        message: ''
      }, ''));
      expect(newState.isFetching).toBe(false);
    })

     test('получение данных пользователя с сервера (fulfilled)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, getUser.fulfilled(mockUserResponse, ''));
      expect(newState.isFetching).toBe(false);
      expect(newState.userData?.user.email).toBe(mockRegisterData.email);
      expect(newState.userData?.user.name).toBe(mockRegisterData.name);
    })
})

describe('тестирование асинхрохронного экшена регистрации пользователя (registerUser)', () => {
    test('отправка данных пользователя на сервер при регистрации (pending)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, registerUser.pending('', mockRegisterData));
      expect(newState.isFetching).toBeTruthy;
    }),

    test('отправка данных пользователя на сервер при регистрации (rejected)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, registerUser.rejected({
        name: '',
        message: ''
      }, '', mockRegisterData));
      expect(newState.isFetching).toBe(false);
    })

     test('отправка данных пользователя на сервер при регистрации (fulfilled)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, registerUser.fulfilled(mockAuthResponse, '', mockRegisterData));
      expect(newState.isFetching).toBe(false);
      expect(newState.userData?.user.email).toBe(mockRegisterData.email);
      expect(newState.userData?.user.name).toBe(mockRegisterData.name);
    })
})

describe('тестирование асинхрохронного экшена получения доступа к личному кабинету зарегистрированным пользователем (loginUser)', () => {
    test('отправка данных зарегистрированного пользователя на сервер при входе в личный кабинет (pending)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, loginUser.pending('', mockLoginData));
      expect(newState.isFetching).toBeTruthy;
    }),

    test('отправка данных зарегистрированного пользователя на сервер при входе в личный кабинет (rejected)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, loginUser.rejected({
        name: '',
        message: ''
      }, '', mockLoginData));
      expect(newState.isFetching).toBe(false);
    })

     test('отправка данных зарегистрированного пользователя на сервер при входе в личный кабинет (fulfilled)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, loginUser.fulfilled(mockAuthResponse, '', mockLoginData));
      expect(newState.isFetching).toBe(false);
      expect(newState.userData?.user.email).toBe(mockLoginData.email);
      expect(newState.userData?.user.name).toBe(mockAuthResponse.user.name);
    })
})

describe('тестирование асинхрохронного экшена обновления регистрационных данных пользователя (updateUserData)', () => {
    test('отправка данных зарегистрированного пользователя на сервер при изменении регистрационных данных (pending)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, updateUserData.pending('', mockRegisterData));
      expect(newState.isFetching).toBeTruthy;
    }),

    test('отправка данных зарегистрированного пользователя на сервер при изменении регистрационных данных (rejected)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, updateUserData.rejected({
        name: '',
        message: ''
      }, '', mockRegisterData));
      expect(newState.isFetching).toBe(false);
    })

     test('отправка данных зарегистрированного пользователя на сервер при изменении регистрационных данных (fulfilled)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, updateUserData.fulfilled(mockAuthResponse, '', mockRegisterData));
      expect(newState.isFetching).toBe(false);
      expect(newState.userData?.user.email).toBe(mockRegisterData.email);
      expect(newState.userData?.user.name).toBe(mockRegisterData.name);
    })
})

describe('тестирование асинхрохронного экшена выхода пользователя из личного кабинета (logoutUser)', () => {
    test('выход пользователя из личного кабинета (pending)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, logoutUser.pending(''));
      expect(newState.isFetching).toBeTruthy;
    }),

    test('выход пользователя из личного кабинета (rejected)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, logoutUser.rejected({
        name: '',
        message: ''
      }, ''));
      expect(newState.isFetching).toBe(false);
    })

     test('отправка данных зарегистрированного пользователя на сервер при изменении регистрационных данных (fulfilled)', () => {
      const newState = userInfoSlice.reducer(userInfoInitialState, logoutUser.fulfilled(undefined, ''));
      expect(newState.isFetching).toBe(false);
      expect(newState.userData).toBe(null);
    })
})
