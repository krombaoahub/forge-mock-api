// import $ from 'jquery';
import _ from 'lodash';
import { useFlyOnUI } from './hooks/use-init-flyoui';
import { AppRoutes } from './routes';
import { Suspense } from 'react';

// window.$ = $;
// window.jQuery = $;
window._ = _;

function App() {

  useFlyOnUI()

  return (<div>
    <Suspense fallback={<>Loading</>}>
      <AppRoutes />
    </Suspense>
  </div>
  );
}

export default App;