import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <>
      <ul className={css["card-items"]}>
        <li className={css["card-item"]}>
          <FaUser />
          &nbsp;
          {name}
        </li>
        <li className={css["card-item"]}>
          <FaPhone />
          &nbsp;
          {number}
        </li>
      </ul>
      <button type="button" className={css["card-btn"]} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
}
