import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ filteredContacts, onDeleteContact }) {
  return (
    <ul className={css["card-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.card}>
            <Contact name={contact.name} number={contact.number} id={contact.id} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
}
