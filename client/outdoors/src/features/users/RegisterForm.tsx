import React from "react";
import { ErrorMessage, Formik } from "formik";
import MyTextInput from "../../app/common/MyTextInput";
import { Button, Header, Label } from "semantic-ui-react";
import { Form } from "formik";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from 'yup';
import ValidationErrors from "../errors/ValidationErrors";

export default observer(function RegisterForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{displayName: '', username: '', email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .register(values)
          .catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
          displayName: Yup.string().required(),
          username: Yup.string().required(),
          email: Yup.string().required().email(),
          password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="ui form error" onSubmit={handleSubmit} autoComplete="off">
          <Header
            as="h2"
            content="Rejestracja"
            color="green"
            textAlign="center"
          />
          <MyTextInput name="displayName" placeholder="Nazwa wyświetlana dla innych" />
          <MyTextInput name="username" placeholder="Nazwa użytkownika" />
          <MyTextInput name="email" placeholder="Email" />
          <MyTextInput name="password" placeholder="Hasło" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <ValidationErrors errors={errors.error}/>
            )}
          />
          <Button
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Rejestracja"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
