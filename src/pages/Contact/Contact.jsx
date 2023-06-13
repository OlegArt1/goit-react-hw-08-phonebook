import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactListItem } from "components/ContactList/ContactList";
import { fetchContacts } from "Redux/contacts/operations";
import Css from "./Contact.module.css";

export default function ContactList()
{
    const dispatch = useDispatch();
    
    useEffect(() =>
    {
        dispatch(fetchContacts());

    }, [dispatch]);

    const contacts = useSelector(state => state.contacts.items);

    return (
        <div className={Css.contact}>
            <h1 className={Css.title_phonebook}>Phonebook</h1>
            <div>
                <ContactForm/>
                {contacts.length < 1 ?
                    <h1 className={Css.contact__title}>Add your first contact</h1>
                    :
                    <ContactFilter/>
                }
            </div>
            <h1 className={Css.title_contact}>Contacts</h1>
            <ContactListItem/>
        </div>
    );
};