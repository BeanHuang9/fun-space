import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './assets/scss/index.scss'

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App
