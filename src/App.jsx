import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsData from "./components/data/contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contactsValue");
    return JSON.parse(savedContacts) ?? contactsData;
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactsValue", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  const onAddContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    setContacts([newContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((item) => item.id !== contactId));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList filteredContacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;
