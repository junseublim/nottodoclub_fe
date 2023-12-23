import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';
import BottomTab from "./components/molecules/BottomTab"

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
        <BottomTab/>
     </div>
    </>
  )
}

export default App
