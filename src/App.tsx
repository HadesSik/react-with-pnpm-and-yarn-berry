import { Global } from '@emotion/react';
import Router from './router/Router';
import resetCss from './modules/styles/reset';
import { BrowserRouter } from 'react-router-dom';
import { BaseLayout } from './components/BaseLayout';

function App() {
  return (
    <>
      <Global styles={resetCss} />
      <BrowserRouter>
        <BaseLayout>
          <Router />
        </BaseLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
