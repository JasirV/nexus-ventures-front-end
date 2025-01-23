import Footer from "./components/footer"
import NavigationBar from "./components/navigationBar"
import { RouterProvider } from 'react-router';
import {router} from './router'

function App() {


  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
