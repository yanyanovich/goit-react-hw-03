import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactSchema = Yup.object().shape({
    contactName: Yup.string().min(3, "Name Is Too Short!").max(50, "Name Is Too Long!").required("Required Name"),
    contactNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid!").required("Required Number"),
  });
  const INITIALS_VALUES = { contactName: "", contactNumber: "" };

  const handleSubmit = (values, actions) => {
    const contactObj = {
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(contactObj);
    actions.resetForm();
  };
  return (
    <Formik initialValues={INITIALS_VALUES} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type="text" name="contactName" placeholder="Enter contact name..." autoComplete="off" required />
            <ErrorMessage className={css.errorText} name="contactName" component="span" />
          </label>

          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} type="tel" name="contactNumber" placeholder="Enter phone number as: xxx-xx-xx" autoComplete="off" required />
            <ErrorMessage className={css.errorText} name="contactNumber" component="span" />
          </label>

          <button disabled={Object.keys(errors).length > 0} className={css["form-btn"]} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
