import { Navigate, Outlet } from "react-router-dom"
import { useMeLogin } from "./query/authentication.ts"

const ProtectedRoute = () => {
    const {data: user, isLoading, isError} = useMeLogin()

    if(isLoading)
      return  <>Checking....</>

    if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  // ⭐ user exists → allow access
  return <Outlet />;
}

export default ProtectedRoute