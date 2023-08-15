import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import ProtectedRouter from "./pages/ProtectedRouter/ProtectedRouter";
import Dashboard from "./pages/dashboard/view/Dashboard.jsx";
import Register from "./pages/register/Register";
import ConfirmAccontUser from "./pages/confirmAccont/ConfirmAccontUser";
import PageNotFound from "./pages/NotFound/PageNotFound.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider";
import AlbumContextProvider from "./contexts/AlbumContextProvider.jsx";
import ImageContextProvider from "./contexts/ImageContextProvider.jsx";
import AlertContextProvider from "./contexts/AlertContextProvider.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/iniciar-sesion",
      element: <Login />,
    },
    {
      path: "/confirmar-cuenta/:token",
      element: <ConfirmAccontUser />,
    },
    {
      path: "/registrate",
      element: <Register />,
    },
    {
      path: "/",
      element: <ProtectedRouter />,
      children: [
        {
          path: "/dashboard",
          element: (
            <AlertContextProvider>
              <AlbumContextProvider>
                <ImageContextProvider>
                  <Dashboard />
                </ImageContextProvider>
              </AlbumContextProvider>
            </AlertContextProvider>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
