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
    <div className="h-full">
      <Header className="w-screen"></Header>
      <div className="flex justify-center items-center md:grid md:grid-cols-2">
        <div className="m-auto ">
          <p className="form-login">Bienvenido</p>
          <h2 className="form-title">Inicia sesón en tu cuenta!</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              setFormValues({ email: values.email, password: values.password });
            }}
          >
            {({ errors }) => (
              <Form className=" flex h-full flex-col rounded-lg m-2 space-y-4">
                <Field className="form-login p-3"
                  validate={validateEmail}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email ? <div>{errors.email}</div> : null}
                <Field
                className="form-login p-3 "
                  validate={validatePassword}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                {errors.password ? <div>{errors.password}</div> : null}
                <button className="form-login-button p-3 bg-redPure text-white text-base" type="submit">Inicia sesión</button>
              </Form>
            )}
          </Formik>
          <p className="form-footer mt-17">
            No tienes cuenta?{" "}
            <a className="text-redPure no-underline cursor-pointer" onClick={ null /*navigate /register */}>
              Registrate
            </a>
          </p>
        </div>

        <div className="hidden sm:hidden md:flex md:place-items-end md:h-full md:w-full">
          <img
            className=" md:h-screen md:w-full "
            src="images/login-hands.png"
            alt="manos unidas"
          />
        </div>
      </div>
    </div>
  );
};
