import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';

function App() {
  return (
      <div className='font-suit text-base text-gray-900'>
        <RouterProvider router={router}/>
     </div>
  )
}

export default App
