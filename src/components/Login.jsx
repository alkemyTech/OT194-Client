import React, {useState} from 'react'
import { Formik, Form } from 'formik'


export const Login = () => {
    const [formValues, setFormValues] = useState({
        email:'',
        constraseña:''
    })


  return (
    <div>Login

    <Formik initialValues={{email:'',constraseña:''}}
     validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Correo invalido.';
        }
        if (!values.constraseña){
            errors.constraseña = 'Required';
          } else if (values.constraseña.length < 6){
              errors.constraseña = 'La contraseña debe tener al menos 6 caracteres.'
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
           {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
}
