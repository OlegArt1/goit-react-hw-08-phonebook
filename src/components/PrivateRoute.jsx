import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo: addres }) =>
{
    const { isLoaggedIn, isRefreshing } = useSelector(state => state.auth);

    const shouldRedirect = !isLoaggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={addres} /> : Component;
};