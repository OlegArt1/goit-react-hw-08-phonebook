import Css from "./Home.module.css";

export default function Home()
{
    return (
        <div className={Css.home__container}>
            <h1 className={Css.home__title}>
                <span>Task manager welcome page{' '}</span>
                <span role="img" aria-label="Greeting icon">💁‍♀️</span>
            </h1>
        </div>
    );
};