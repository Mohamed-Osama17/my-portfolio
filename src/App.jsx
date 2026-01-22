import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { Toast, ToastProvider, ToastViewport } from '@radix-ui/react-toast'

function App() {


  let router = createBrowserRouter([
    {
      index: true, element: <Home />
    },
    {
      path: "*", element: <NotFoundPage />
    },
  ])

  return (
    <>
      <ToastProvider swipeDirection='right'>
        <RouterProvider router={router}>
        </RouterProvider>
        <ToastViewport className="fixed bottom-0 right-0 p-4 max-h-screen w-full max-w-md list-none z-50 outline-none" />
      </ToastProvider>
    </>
  )
}

export default App
