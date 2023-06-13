import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "Redux/auth/operations";
import Css from "./Authorization.module.css";

export default function Login()
{
  const dispatch = useDispatch();

    const handleSubmit = (evt) =>
    {
        evt.preventDefault();
    
        const form = evt.currentTarget;
    
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };
    return (
        <form className={Css.authorization} onSubmit={handleSubmit} autoComplete="off">
            <label className={Css.authorization__label}>
                <span className={Css.authorization__text}>Email</span>
                <input className={Css.authorization__input_login} type="email" name="email"
                       placeholder="Enter email"/>
            </label>
            <label className={Css.authorization__label}>
                <span className={Css.authorization__text}>Password</span>
                <input className={Css.authorization__input_password} type="password" name="password"
                       placeholder="Enter password"/>
            </label>
            <p className={Css.authorization__button_block}>
                <button className={Css.authorization__button} type="submit">Log In</button>
            </p>
            <br/><br/>
            <p className={Css.authorization__link_block}>
                <span className={Css.authorization__link_text}>Log in or <Link style={{ color: 'lightblue' }} to="/register">register new</Link>!</span>
            </p>
        </form>
    );
};