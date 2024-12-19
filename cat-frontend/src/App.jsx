import { useState, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import useAuthCheck from './hooks/useAuthCheck'
import DefaultLoader from '@/components/loader/default-loader'




function App() {

  const authInfoSettled = useAuthCheck();
  
  if(!authInfoSettled){
    return <DefaultLoader/>;
  }

  return (
    <Suspense fallback={<DefaultLoader/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
