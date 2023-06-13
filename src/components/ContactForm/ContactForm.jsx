import { useDispatch } from "react-redux";
import { addContact } from "Redux/contacts/operations";
import Css from "./ContactForm.module.css";

export const ContactForm = () =>
{
    const dispatch = useDispatch();

    const handleSubmit = event =>
    {
        event.preventDefault();
  
        const form = event.currentTarget;

        const add_contact =
        {
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value
        };
        dispatch(addContact(add_contact));

        form.reset();
    };
    return (
        <form className={Css.form} onSubmit={handleSubmit}>
            <label className={Css.form__label}>
                <span className={Css.form__span_text}>Name</span>
                <input className={Css.form__input_name} type="text" name="name"
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                       placeholder="Enter name" required/>
            </label>
            <label className={Css.form__label}>
                <span className={Css.form__span_text}>Number</span>
                <input className={Css.form__input_number} type="tel" name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       placeholder="Enter number" required/>
            </label>
            <p className={Css.form__button_block}>
                <button className={Css.form__button} type="submit">Add contact</button>
            </p>
        </form>
    );
};