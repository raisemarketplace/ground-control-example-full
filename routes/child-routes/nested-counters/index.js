import component, { reducer } from 'routes/child-routes/nested-counters/components';
import indexRoute from 'routes/child-routes/nested-counters/index-route';
import multiplyCounterRoute from 'routes/child-routes/nested-counters/child-routes/multiply-counter';
import squareCounterRoute from 'routes/child-routes/nested-counters/child-routes/square-counter';

export default {
  path: '/nested-counters',
  component,
  reducer,
  indexRoute,
  childRoutes: [
    multiplyCounterRoute,
    squareCounterRoute,
  ],
};
