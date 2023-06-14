import { useDispatch } from "react-redux";
import { registration } from "Redux/auth/operations";
import Css from "./Registration.module.css";

export default function Register()
{
  const dispatch = useDispatch();

    const handleSubmit = e =>
    {
        e.preventDefault();
    
        const form = e.currentTarget;
    
        dispatch(registration({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };
/*
    const handleLoad = () =>
    {
        for (let i = 0; i <= 1; i += 1)
        {
            window.location.reload(false);

            break;
        }
    };
*/
    return (
        <form className={Css.registration} onLoad={window.location.reload(true)} onSubmit={handleSubmit} autoComplete="off">
            <label className={Css.registration__label}>
                <span className={Css.registration__text}>Name</span>
                <input className={Css.registration__input_name} type="text" name="name"
                       placeholder="Enter name"/>
            </label>
            <label className={Css.registration__label}>
                <span className={Css.registration__text}>Email</span>
                <input className={Css.registration__input_email} type="email" name="email"
                       placeholder="Enter email"/>
            </label>
            <label className={Css.registration__label}>
                <span className={Css.registration__text}>Password</span>
                <input className={Css.registration__input_password} type="password" name="password"
                       placeholder="Enter password"/>
            </label>
            <p className={Css.registration__button_block}>
                <button className={Css.registration__button} type="submit">Register</button>
            </p>
        </form>
    );
};