import component, { reducer } from 'routes/components';
import indexRoute from 'routes/index-route';
import googleBooksRoute from 'routes/child-routes/google-books';
import nestedCountersRoute from 'routes/child-routes/nested-counters';
import loopLoopLoop from 'routes/child-routes/loop-loop-loop';

// adjusted route api...
// {
//   path,
//   component,
//   childRoutes,
//   getChildRoutes,
//   ...
//   reducer (optional),
//   asyncEnter (optional),
//   loader (optional),
//   deserializer (optional),
// }

// routes can be defined using jsx, or as an object (my preference, especially with larger app)
export default {
  path: '/',
  component,
  reducer,
  indexRoute,
  childRoutes: [
    googleBooksRoute,
    nestedCountersRoute,
    loopLoopLoop,
  ],
};
