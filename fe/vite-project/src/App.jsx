import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ROUTERS/router'
import MainProvaider from './context/MainProvaider'

function App() {

  return (
    <>
    <MainProvaider>
    <RouterProvider router={router}></RouterProvider>
    </MainProvaider>
    </>
  )
}

export default App
