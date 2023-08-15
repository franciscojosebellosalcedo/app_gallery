import { Outlet,Navigate } from "react-router-dom";
import { useContextAuth } from '../../contexts/AuthContextProvider';

const ProtectedRouter = () => {
  const valuesContextAuth=useContextAuth();
  return (
    valuesContextAuth.isAuthenticated===true ?<Outlet/>:<Navigate to="/"/>
  )
}

export default ProtectedRouter