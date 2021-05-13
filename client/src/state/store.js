import { createStore } from 'redux';
import { initialState } from './initialState';

export const ACTION_ADD_DATA = 'ACTION_ADD_DATA';

// const actionAddData = {
//   type: ACTION_ADD_DATA,
//   payload: null,
// }

const rootReducer = (state = initialState, action) => {
  if (action.type === ACTION_ADD_DATA) {
    console.log(state['change_percent']);

    if (state[0].price.length <= 20) {
      return state.map((item, index) => ({
        'ticker': `${item.ticker}`,
        'exchange': 'NASDAQ',
        'price': [
          ...state[index].price,
          +action.payload[index].price
        ],
        'change': [
          ...state[index].change,
          +action.payload[index].change
        ],
        'change_percent': [
          ...state[index]['change_percent'],
          +action.payload[index]['change_percent']
        ], 'dividend': [
          ...state[index].dividend,
          +action.payload[index].dividend
        ],
        'yield': [
          ...state[index].yield,
          +action.payload[index].yield
        ],
         'last_trade_time': [
          ...state[index]['last_trade_time'],
          action.payload[index]['last_trade_time']
         ]
      }))
    } else {
      return state.map((item, index) => ({
        'ticker': `${item.ticker}`,
        'exchange': 'NASDAQ',
        'price': [
          ...state[index].price.slice(1)
            .concat(+action.payload[index].price)
        ],
        'change': [
          ...state[index].change.slice(1)
            .concat(+action.payload[index].change)
        ],
        'change_percent': [
          ...state[index]['change_percent'].slice(1)
            .concat(+action.payload[index]['change_percent']),
        ], 'dividend': [
          ...state[index].dividend.slice(1)
            .concat(+action.payload[index].dividend)
        ],
        'yield': [
          ...state[index].yield.slice(1)
            .concat(+action.payload[index].yield)
        ],
         'last_trade_time': [
            ...state[index]['last_trade_time'].slice(1)
              .concat(action.payload[index]['last_trade_time'])
        ]
      }))
    }
  }

  return state;
};

export const store = createStore(rootReducer);
