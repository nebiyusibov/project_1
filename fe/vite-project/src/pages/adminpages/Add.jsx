import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {

  return (
    <Formik
      initialValues={{ name: '', surname: '', job: '', age: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        surname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        job: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        age: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),

      })}
      onSubmit={(values, { setSubmitting }) => {

        async function getUser() {
          const res = await fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          const data = await res.json()
        }
        getUser()
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="name">name</label> <br />
        <Field name="name" type="text" />
        <ErrorMessage name="name" /> <br /> <br />

        <label htmlFor="surname">surname</label><br />
        <Field name="surname" type="text" />
        <ErrorMessage name="surname" /><br /> <br />

        <label htmlFor="job">job </label><br />
        <Field name="job" type="text" />
        <ErrorMessage name="job" /><br /> <br />

        <label htmlFor="age">age</label><br />
        <Field name="age" type="text" />
        <ErrorMessage name="age" /><br /> <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik> 
  )
}

export default Add