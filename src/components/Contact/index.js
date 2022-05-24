import React from "react";
import { Formik } from "formik";
import { contactFormSchema } from "../share/Forms/ContactForm/schemaContactForm";
import { ContactForm } from "../share/Forms/ContactForm";

export const Contact = () => {
  const startValues = {
    fullName: "",
    email: "",
    message: "",
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/2 ">
        <h1>Nuestra mision</h1>
        <p>
          Mejorar la calidad de vida de niños y familias en situación de
          vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en
          cada individuo a través de la educación, salud, trabajo, deporte,
          responsabilidad y compromiso.
        </p>
      </div>
      <Formik
        data-testid="test-id-formik"
        enableReinitialize
        initialValues={startValues}
        validationSchema={contactFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }}
        component={ContactForm}
      />
    </div>
  );
};
