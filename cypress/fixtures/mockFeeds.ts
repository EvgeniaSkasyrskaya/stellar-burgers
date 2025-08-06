import { TOrder } from "@utils-types";

type TFeeds = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};
 
export const mockFeeds: TFeeds = {
  orders: [
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
    {
      _id: '68913117d5ca30001cffd81d',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944'
      ],
      status: 'done',
      name: 'Краторный люминесцентный метеоритный бургер',
      createdAt: '2025-08-04T22:15:51.328Z',
      updatedAt: '2025-08-04T22:15:52.148Z',
      number: 85795
    },
    {
      _id: '68911c7cd5ca30001cffd80b',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0944'
      ],
      status: 'done',
      name: 'Краторный люминесцентный бургер',
      createdAt: '2025-08-04T20:47:56.597Z',
      updatedAt: '2025-08-04T20:47:57.516Z',
      number: 85794
    }
  ],
  total: 85425,
  totalToday: 51
}