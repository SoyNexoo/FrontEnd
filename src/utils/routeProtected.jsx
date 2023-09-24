import { Outlet, Navigate } from 'react-router-dom'

export const RouteProtected = () => {
  const token = localStorage.getItem('log')
  return token ? <Outlet></Outlet> : <Navigate to={'/checkIn'}></Navigate>
}
