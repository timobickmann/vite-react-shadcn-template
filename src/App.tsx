import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./components/ThemeProvider";

//pages
import Home from "./pages/Home";
import Page from "./pages/Page";
import ErrorPage from "./pages/ErrorPage";

//layouts
import Root from "./layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page",
        element: <Page />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
