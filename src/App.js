
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import { router } from './Router/Routes';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}>
      <Layout></Layout>
    </RouterProvider>
    
    </div>
  );
}

export default App;
