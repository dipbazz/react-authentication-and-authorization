import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import Authenticated from './pages/authenticated';
import Unauthenticated from './pages/unauthenticated';
import AuthenticatedAndUnauthorized from './pages/authenticated-and-unauthorized';
import AuthenticatedAndAuthorized from './pages/authenticated-and-authorized';
import CanAccess from './components/CanAccess';

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
        path: '/authenticated',
        element: (
          <CanAccess>
            <Authenticated />
          </CanAccess>
        )
      },
      {
        path: '/authenticated-and-authorized',
        element: (
          <CanAccess>
            <AuthenticatedAndUnauthorized />
          </CanAccess>
        )
      },
      {
        path: '/authenticated-and-unauthorized',
        element: (
          <CanAccess>
            <AuthenticatedAndAuthorized />
          </CanAccess>
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
