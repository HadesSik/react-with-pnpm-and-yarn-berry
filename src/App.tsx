import { Global } from '@emotion/react';
import resetCss from '@/modules/styles/reset';
import Router from './router';

function App() {
  return (
    <>
      <Global styles={resetCss} />
      <Router />
    </>
  );
}

export default App;
