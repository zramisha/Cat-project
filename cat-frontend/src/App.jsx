import { useState, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import DefaultLoader from '@/components/loader/default-loader'




function App() {


  return (
    <Suspense fallback={<DefaultLoader/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App