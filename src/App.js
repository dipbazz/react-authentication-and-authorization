import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import Authorized from './pages/authorized';
import Unauthorized from './pages/unauthorized';
import AuthenticatedAndUnAuthorized from './pages/authenticated-and-unauthorized';
import AuthenticatedAndAuthorized from './pages/authenticated-and-authorized';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: '/authorized',
        element: <Authorized />
      },
      {
        path: '/unauthorized',
        element: <Unauthorized />
      },
      {
        path: '/authenticated-and-authorized',
        element: <AuthenticatedAndUnAuthorized />
      },
      {
        path: '/authenticated-and-authorized',
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
