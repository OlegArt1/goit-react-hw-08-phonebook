import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Spin } from "antd";
import styled from "styled-components";
import Css from "./AppBar.module.css";

export const Spiner = styled(Spin)`
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const AppBar = () =>
{
    const { isLoaggedIn, isLoading } = useSelector(state => state.auth); // це для того щоб не було редіректу на логін поки не завантажиться токен

    return (
        <header className={Css.app_bar__header}>
            {isLoading && <Spiner/>}
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