import { useSelector } from "react-redux";
import
{
    selectUserAuth, selectIsLoggedIn, selectIsRefreshing
}
from "Redux/auth/selectors";

export const useAuth = () =>
{
    const user = useSelector(selectUserAuth);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        user, isLoggedIn, isRefreshing
    };
};