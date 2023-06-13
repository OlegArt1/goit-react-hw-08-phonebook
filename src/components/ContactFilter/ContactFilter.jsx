import { useDispatch, useSelector } from "react-redux";
import { filtration } from "Redux/contacts/filtersSlice";
import Css from "./ContactFilter.module.css";

export const ContactFilter = () =>
{ 
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const handleFilter = (evt) =>
    {
        dispatch(filtration(evt.target.value));
    };
    return (
        <div className={Css.filter}>
            <label className={Css.filter__label}>
                <span className={Css.filter__span_text}>Search</span>
                <input className={Css.filter__input_name} type="text" name="filter" value={filter}
                       placeholder="Enter name" onChange={handleFilter}/>
            </label>
        </div>
    );
};