import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";


import { useEffect, useState } from "react";

const initialValues =  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]

export default function App() {

  const [values, setValues] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts ? JSON.parse(saveContacts) : initialValues;
  });
    

    const [searchTerm, setSearchTerm] = useState("")
    
    const addContacts = (newValue) => {
        setValues([...values, newValue])
        
    }

    const filteredContacts = values.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()))


    const removeContact = (id) => {
    setValues(values.filter(value => value.id !== id));
  };

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(values))
    },[values])

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContacts={addContacts} />
            <SearchBox searchTerm={searchTerm} onFilter={setSearchTerm} />
            <ContactList values={filteredContacts} removeContact={removeContact} />
            
</div>

    )
}
