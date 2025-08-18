import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './constents/router.jsx'

export const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
