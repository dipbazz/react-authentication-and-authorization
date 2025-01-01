import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import router from './router';

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
