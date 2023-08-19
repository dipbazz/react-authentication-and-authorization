import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import Authenticated from './pages/authenticated';
import Unauthenticated from './pages/unauthenticated';
import AuthenticatedAndUnauthorized from './pages/authenticated-and-unauthorized';
import AuthenticatedAndAuthorized from './pages/authenticated-and-authorized';

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
        element: <Authenticated />
      },
      {
        path: '/authenticated-and-authorized',
        element: <AuthenticatedAndUnauthorized />
      },
      {
        path: '/authenticated-and-unauthorized',
        element: <AuthenticatedAndAuthorized />
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
