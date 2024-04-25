import css from "./ContactForm.module.css"
import {useId} from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { nanoid } from 'nanoid'
import * as Yup from "yup";

export default function ContactForm({onAddContact}) {
  const idName = useId();
  const idNumber = useId();

  const ValidSchema = Yup.object().shape({
    name:Yup.string().min(3,"Too Short!").max(50,"Too Long!").required("Required"),
    number:Yup.string().min(3,"Too Short!").max(50,"Too Long!").required("Required")
  })

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number
    })
		actions.resetForm();
	};

  return (
    <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit} validationSchema={ValidSchema}>
			<Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={idName}>Name</label>
          <Field className={css.input} type="text" name="name" id={idName} />
          <ErrorMessage name="name" component="span" className={css.error}/>
        </div>
        <div className={css.formContainer}>
          <label htmlFor={idNumber}>Number</label>
          <Field className={css.input} type="text" name="number" id={idNumber}/>
          <ErrorMessage name="number" component="span" className={css.error}/>
        </div>
				<button type="submit">Add contact</button>
			</Form>
    </Formik>
  )
}

