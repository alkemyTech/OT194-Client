import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Header } from "./Header/Header";

export const Login = () => {
  const validateEmail = (value) => {
    let errorMessageEmail;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorMessageEmail = "Email invalido";
    }

    return errorMessageEmail;
  };
  const validatePassword = (value) => {
    let errorMessagePassword;

    if (value.length < 6) {
      errorMessagePassword = "Constraseña invalida";
    }
    return errorMessagePassword;
  };
  const [formValues, setFormValues] = useState({
    email: "",
    constraseña: "",
  });

  return (
    <div>
      <Header></Header>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setFormValues({ email: values.email, password: values.password });
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              validate={validateEmail}
              type="email"
              name="email"
              placeholder="Email"
            />
            {errors.email ? <div>{errors.email}</div> : null}
            <Field
              validate={validatePassword}
              id="password"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            {errors.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
