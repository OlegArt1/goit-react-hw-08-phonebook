import { useSelector } from "react-redux";
import
{
    selectAuth, selectIsLoggedIn, selectIsRefreshing
}
from "Redux/auth/selectors";

export const useAuth = () =>
{
    const user = useSelector(selectAuth);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        user, isLoggedIn, isRefreshing
    };
};