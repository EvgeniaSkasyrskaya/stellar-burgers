import { BurgerConstructorState } from './constructorSlice';
import { BurgerFeedsState } from './feedsSlice';
import { BurgerIngredientsState } from './ingredientsSlice';
import { UserOrdersState } from './userOrdersSlice';
import { TUserInfo, TRegisterData } from './userInfoSlice'
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import {
  TNewOrderResponse,
  TFeedsResponse,
  TOrderResponse,
  TIngredientsResponse,
  TAuthResponse,
  TUserResponse
} from '../../utils/burger-api';
import { mockFeeds } from '../../../cypress/fixtures/mockFeeds';
import { mockIngredients } from '../../../cypress/fixtures/mockIngredients';

export const initialEmptyState: BurgerConstructorState = {
    constructorItems: {
    bun: null,
    ingredients: []
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const initialNonEmptyState: BurgerConstructorState = {
    constructorItems: {
    bun:  {
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
      image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    },
    ingredients: [
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
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      id: '125'
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
      id: '512'
    }
   ]
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const initialStateWuthDuplicateIngredient: BurgerConstructorState = {
    constructorItems: {
    bun:  {
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
      image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    },
    ingredients: [
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
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      id: '125'
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
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      id: '521'
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
      id: '512'
    }
   ]
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const newBun: TIngredient = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
}

export const newIngredient: TIngredient = {
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

export const stateWithOnlyBun: BurgerConstructorState = {
    constructorItems: {
    bun:  {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    ingredients: []
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const stateWithNewBun: BurgerConstructorState = {
    constructorItems: {
    bun:  {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    ingredients: [
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
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      id: '125'
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
      id: '512'
    }
   ]
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const ingredientToDelete: TConstructorIngredient = {
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
    image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
    id: '125'
}

export const bunToDelete: TConstructorIngredient = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  id: '555'
}

export const stateAfterDeletingDuplicateIngredient: BurgerConstructorState = {
    constructorItems: {
    bun:  {
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
      image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    },
    ingredients: [
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
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      id: '521'
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
      id: '512'
    }
   ]
  },
  price: 0,
  isOrderProcessing: false,
  orderModalData: null
}

export const orderCompound: string[] = [
  '643d69a5c3f7b9001cfa093d',
  '643d69a5c3f7b9001cfa0944',
  '643d69a5c3f7b9001cfa0946',
  '643d69a5c3f7b9001cfa0945'
]

export const orderResponse: TNewOrderResponse = {
  success: true,
  name: 'Традиционный-галактический флюоресцентный минеральный антарианский бургер',
  order: {
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0944',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0945'  
    ],
    _id: '68909578d5ca30001cffd704',
    status: 'done',
    name: 'Традиционный-галактический флюоресцентный минеральный антарианский бургер',
    createdAt: '2025-08-04T11:11:52.208Z',
    updatedAt: '2025-08-04T11:11:52.966Z',
    number: 85761
  }
}

export const feedsInitialState: BurgerFeedsState = {
  feeds: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  isFeedsLoading: false,
  orderForView: {
    orders: []
  },
  isOrderLoading: false
}

export const mockFeedsResponse: TFeedsResponse = {
    success: true,
    orders: mockFeeds.orders,
    total: mockFeeds.total,
    totalToday: mockFeeds.totalToday
}

export const mockOrderNumber: number = 85826;

export const mockOrderByNumberResponse: TOrderResponse = {
  success: true,
  orders: [
    {
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0945'
      ],
      _id: '689226c1d5ca30001cffd9d6',
      status: 'done',
      name: 'Традиционный-галактический флюоресцентный минеральный антарианский бургер',
      createdAt: '2025-08-05T15:44:01.505Z',
      updatedAt: '2025-08-05T15:44:32.519Z',
      number: 85826
    }
  ]
}

export const mockOrderByNumber: TOrder[] = [
  {
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0944',
      '643d69a5c3f7b9001cfa0945'
    ],
    _id: '689226c1d5ca30001cffd9d6',
    status: 'done',
    name: 'Традиционный-галактический флюоресцентный минеральный антарианский бургер',
    createdAt: '2025-08-05T15:44:01.505Z',
    updatedAt: '2025-08-05T15:44:32.519Z',
    number: 85826
  }
]

export const ingredientsInitialState: BurgerIngredientsState = {
    isIngredientsLoading: false,
    ingredientsList: []
};

export const mockIngredientsResponse: TIngredientsResponse = {
  success: true,
  data: mockIngredients
}

export const userOrdersInitialState: UserOrdersState = {
  userOrders: [],
  isUserOrdersLoading: false
};

export const mockUserOrdersResponse: TFeedsResponse = {
  success: true,
    orders: mockFeeds.orders.slice(0, 3),
    total: mockFeeds.total,
    totalToday: mockFeeds.totalToday
}

export const mockUserOrders: TOrder[] = [
  {
    _id: '6891aabfd5ca30001cffd877',
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0946'
    ],
    status: 'done',
    name: 'Краторный spicy люминесцентный метеоритный бургер',
    createdAt: '2025-08-05T06:54:55.977Z',
    updatedAt: '2025-08-05T06:54:56.824Z',
    number: 85798
  },
  {
    _id: '6891a8ccd5ca30001cffd873',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0945',
      '643d69a5c3f7b9001cfa0944'
    ],
    status: 'done',
    name: 'Фалленианский краторный экзо-плантаго люминесцентный метеоритный бургер',
    createdAt: '2025-08-05T06:46:36.307Z',
    updatedAt: '2025-08-05T06:46:37.371Z',
    number: 85797
  },
  {
    _id: '68919306d5ca30001cffd858',
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0946'
    ],
    status:'done',
    name: 'Краторный spicy био-марсианский бургер',
    createdAt: '2025-08-05T05:13:42.469Z',
    updatedAt: '2025-08-05T05:13:43.429Z',
    number: 85796
  },
]

export const userInfoInitialState: TUserInfo = {
  userData: {
    user: {
      email: '',
      name: ''
    }
  },
  isFetching: false,
  isUserChecked: false
}

export const mockRegisterData: TRegisterData = {
  name: 'Pirx',
  email: 'syrt@mars.solarsystem',
  password: 'coriolan'
}

export const mockLoginData: Pick<TRegisterData, 'email' | 'password'> = {
  email: 'syrt@mars.solarsystem',
  password: 'coriolan'
}

export const mockAuthResponse: TAuthResponse = {
  success: true,
  accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2RhMjMyNWE1NGRmMDAxYjZkZmFhMSIsImlhdCI6MTc1NDM3OTM3NCwiZXhwIjoxNzU0MzgwNTc0fQ.-_iuW1ZF3_vTiZo1g3mf5bY_5tyxMgruBGT_6-9XYYE',
  refreshToken: 'c58531da20a772ffedfb763fef16ebdc3d9cfdc5cc13acf1f19f9ab9a50deb3760bad2101b6006de',
  user: {
    email: 'syrt@mars.solarsystem',
    name: 'Pirx'
  }
}

export const mockUserResponse: TUserResponse = {
  success: true,
  user: {
    email: 'syrt@mars.solarsystem',
    name: 'Pirx'
  }
}
