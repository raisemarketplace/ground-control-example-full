import React from 'react';
import { createReducer } from 'redux-act';

import createActions from 'utils/createActions';
import { routeStyle } from 'utils/style';

export const actions = createActions('NestedCountersIndex', ['incr']);
export const reducer = createReducer({
  [actions.incr]: (state) => {
    return { ...state, counter: state.counter + 1 };
  },
}, {
  counter: 0,
});

export default props => {
  const { data, dispatch } = props;
  return (
    <div style={routeStyle}>
      <p>
        <span>Counter: {data.counter}</span>&nbsp;
        <button onClick={() => { dispatch(actions.incr()); }}>+</button>
      </p>
    </div>
  );
};
