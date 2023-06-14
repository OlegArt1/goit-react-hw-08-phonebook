import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Vortex } from "react-loader-spinner";
import Css from "./AppBar.module.css";

export const AppBar = () =>
{
    const loaderHeight = (window.innerHeight - 80) / 2;
    const loaderWidth = (window.innerWidth - 80) / 2;

    const { isLoaggedIn, isLoading } = useSelector(state => state.auth);


    return (
        <header className={Css.app_bar__header}>
            {isLoading &&
                <div style={{ marginTop: loaderHeight, marginLeft: loaderWidth }}>
                    <Vortex visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/>
                </div>
            }
            <div className={Css.app_bar__container}>
                <nav className={Css.app_bar__nav}>
                    <div>
                        <NavLink className={Css.app_bar__link} to="/" style={{ paddingRight: 20 }}>
                            <span className={Css.app_bar__text}>Home</span>
                        </NavLink>
                        {isLoaggedIn &&
                            <NavLink className={Css.app_bar__link} to="/contacts" style={{ paddingLeft: 0 }}>
                                <span className={Css.app_bar__text}>Contacts</span>
                            </NavLink>
                        }
                    </div>
                    <div>
                        {isLoaggedIn ?
                            <UserMenu/>
                            :
                            <>
                                <NavLink className={Css.app_bar__link} to="/register">
                                    <span className={Css.app_bar__text}>Register</span>
                                </NavLink>
                                <NavLink className={Css.app_bar__link} to="/login">
                                    <span className={Css.app_bar__text}>Log in</span>
                                </NavLink>
                            </>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};