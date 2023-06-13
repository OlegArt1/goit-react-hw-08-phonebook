import { useDispatch, useSelector } from "react-redux";
import { logOut } from "Redux/auth/operations";
import { Avatar } from "antd";
import Css from "./UserMenu.module.css";

export const UserMenu = () =>
{
    const { email } = useSelector(state => state.auth.user);
    
    const dispatch = useDispatch();

    return (
        <div className={Css.user_menu}>
            <Avatar className={Css.user_menu__avatar}>{email.slice(0, 1).toUpperCase()}</Avatar>
            <p className={Css.user_menu__email_block}>{email}</p>
            <button className={Css.user_menu__button} type="primary" onClick={() => dispatch(logOut())}>
                <span className={Css.user_menu__button_text}>Log out</span>
            </button>{' '}
        </div>
    );
};