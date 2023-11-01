import { useLocation, Navigate } from "react-router-dom"

export default function RequireAuth({children}) {
  const location = useLocation()
  const user = localStorage.getItem('user')
  
  if (!user){
        return <Navigate to='/account/signin' state={{from: location}}/>
    }

  return children 
}
