import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) =>
{
    const { isLoaggedIn } = useSelector(state => state.auth);
  
    return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};