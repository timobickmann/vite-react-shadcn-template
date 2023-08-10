import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
