import Contacts from "../Contacts/Contacts";
import css from "../ContactList/ContactList.module.css"

export default function ContactList({ values, removeContact }) {

  const deleteContacts = (id) => {
    removeContact(id)
  }

    return (
        <ul className={css.list}>
      {values.map((value) => {
        return (
          <li key={value.id}>
            <Contacts value={value} removeContact={deleteContacts} />
          </li>
        );
      })}
    </ul>
    )
}