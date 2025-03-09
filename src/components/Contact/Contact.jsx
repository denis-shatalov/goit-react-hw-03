import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function Contacts({ value,removeContact }) {

    return (
        <div className={css.contactsBox}>
            <div>
                
            <p><FaUser/> {value.name}</p>
            <p><FaPhone/> {value.number}</p>
                
            </div>
            
            <button type="button" onClick={() => removeContact(value.id)} >Delete</button>
        </div>
    )
}