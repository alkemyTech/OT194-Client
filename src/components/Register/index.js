import React from "react";
import { Formik } from "formik";
import { RegisterForm } from "../share/Forms/RegisterForm";
import { registerFormSchema } from "../share/Forms/RegisterForm/schemaRegisterForm";

export const Register = () => {
  const startValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
      <Formik
        data-testid="test-id-formik"
        enableReinitialize
        initialValues={startValues}
        validationSchema={registerFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }}
        component={RegisterForm}
      />
  );
};
