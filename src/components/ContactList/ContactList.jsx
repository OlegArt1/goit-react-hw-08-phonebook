import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "Redux/contacts/operations";
import { selectContacts, selectFilters } from "Redux/contacts/selectors";
import Css from "./ContactList.module.css";

export const ContactListItem = () =>
{
    const dispatch = useDispatch();
    
    useEffect(() =>
    {
        dispatch(fetchContacts());

    }, [dispatch]);

    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectFilters).toLowerCase();

    const data_contacts = contacts.filter(subscriber =>
        subscriber.name.toLowerCase().includes(filters)
    );
    return (
        <>
            <ul className={Css.contact__list}>
                {data_contacts.map(({ id, name, number }) =>
                (
                    <li className={Css.contact__item} key={id}>
                        <div className={Css.contact__block}>
                            <label className={Css.contact__label}>
                                <b className={Css.contact__text_name}>Name:</b>
                                <span className={Css.contact__text_span}>{name};</span>
                            </label>
                            <label className={Css.contact__label}>
                                <b className={Css.contact__text_phone}>Phone:</b>
                                <span className={Css.contact__text_span}>{number};</span>
                            </label>
                        </div>
                        <button className={Css.contact__button} type="button"
                                onClick={() => dispatch(deleteContact(id))}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
};