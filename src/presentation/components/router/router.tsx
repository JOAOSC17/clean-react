import { Login } from '@/presentation/pages'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import '@/presentation/styles/global.scss'
const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
