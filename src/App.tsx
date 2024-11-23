import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '@styles/global';
import theme from '@styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import pageRoutes from '@routes/PageRoutes';
import Emoticon from '@components/Emoticon/Emoticon';

function App() {
  const router = createBrowserRouter([...pageRoutes]);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Emoticon />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
