import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';

function App() {
  return (
      <div className='font-suit'>
        <RouterProvider router={router}/>
     </div>
  )
}

export default App
