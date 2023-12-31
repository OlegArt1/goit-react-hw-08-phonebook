import { useEffect, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Vortex } from "react-loader-spinner";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useAuth } from "hooks";
import { selectAuth } from "Redux/auth/selectors";
import { refreshUser } from "Redux/auth/operations";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Authorization/Authorization"));
const ContactList = lazy(() => import("../pages/Contact/Contact"));
const Register = lazy(() => import("../pages/Registration/Registration"));

export const App = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(refreshUser());
  
    }, [dispatch]);

    const { isRefreshing } = useSelector(selectAuth);

    const is_refreshing = useAuth();
    
    console.log("\nData user: ", is_refreshing);

    const loaderHeight = (window.innerHeight - 80) / 2;
    const loaderWidth = (window.innerWidth - 80) / 2;

    return !isRefreshing ?
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/contacts" element= {<PrivateRoute redirectTo="/login" component={<ContactList/>}/>}/>
                <Route path="/login" element= {<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}/>
                <Route path="/register" element= {<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Route>
        </Routes>
        <GlobalStyle/>
    </>
    :
    <div style={{ marginTop: loaderHeight, marginLeft: loaderWidth }}>
        <Vortex visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperStyle={{}}
                wrapperClass="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/>;
    </div>
};