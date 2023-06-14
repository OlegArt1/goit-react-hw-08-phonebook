import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import { selectUserAuth } from "Redux/auth/selectors";
import { logOut } from "Redux/auth/operations";
import Css from "./UserMenu.module.css";

export const UserMenu = () =>
{
    const { email } = useSelector(selectUserAuth);
    
    const dispatch = useDispatch();

    return (
        <div className={Css.user_menu}>
            <Avatar className={Css.user_menu__avatar}>{email.slice(0, 1).toUpperCase()}</Avatar>
            <p className={Css.user_menu__email_block}>{email}</p>
            <button className={Css.user_menu__button} type="primary" onClick={() => dispatch(logOut())}>
                <span className={Css.user_menu__button_text}>Log out</span>
            </button>
        </div>
    );
};