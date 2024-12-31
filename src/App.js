import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import Authenticated from './pages/authenticated';
import Unauthenticated from './pages/unauthenticated';
import AuthenticatedAndUnauthorized from './pages/authenticated-and-unauthorized';
import AuthenticatedAndAuthorized from './pages/authenticated-and-authorized';
import IsAuthenticated from './components/IsAuthenticated';
import IsAuthorized from './components/IsAuthorized';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: '/unauthenticated',
        element: <Unauthenticated />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/authenticated',
        element: (
          <IsAuthenticated>
            <Authenticated />
          </IsAuthenticated>
        )
      },
      {
        path: '/authenticated-and-authorized',
        element: (
          <IsAuthenticated>
            <IsAuthorized>
              <AuthenticatedAndAuthorized />
            </IsAuthorized>
          </IsAuthenticated>
        )
      },
      {
        path: '/authenticated-and-unauthorized',
        element: (
          <IsAuthenticated>
            <IsAuthorized>
              <AuthenticatedAndUnauthorized />
            </IsAuthorized>
          </IsAuthenticated>
        )
      },
    ]
  },
  {
    path: "*",
    element: <h1>404 page not found!!</h1>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
