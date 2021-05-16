import React from 'react';
import { Formik } from 'formik';
import MyTextInput from '../../app/common/MyTextInput';
import { Button } from 'semantic-ui-react';
import { Form } from 'formik';


export default function LoginForm() {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
        >
            {({handleSubmit}) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name="email" placeholder="Email"/>
                    <MyTextInput name="password" placeholder="Hasło" type='password'/>
                    <Button positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    );
}