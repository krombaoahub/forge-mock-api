// import $ from 'jquery';
import _ from 'lodash';
import { useFlyOnUI } from './hooks/use-init-flyoui';
import { AppRoutes } from './routes';
import { useEffect } from 'react';
import { initializeTheme } from './hooks/use-appearance';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

// window.$ = $;
// window.jQuery = $;
window._ = _;

function App() {
  const { pathname } = useLocation();
  const { setErrorMsg } = useAuthContext()
  useFlyOnUI()

  initializeTheme();

  useEffect(() => {
    setErrorMsg('')
  }, [pathname]);

  return (<div>
    <AppRoutes />
  </div>
  );
}

export default App;