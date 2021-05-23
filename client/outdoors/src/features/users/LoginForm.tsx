import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import MyTextInput from '../../app/common/MyTextInput';
import { Button, Header, Label } from 'semantic-ui-react';
import { Form } from 'formik';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function LoginForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{email: '', password: '', error : null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
                setErrors({error: 'Zły email albo hasło'}))}
        >
            {({handleSubmit, isSubmitting, errors}) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Logowanie' color='green' textAlign='center'/>
                    <MyTextInput name="email" placeholder="Email"/>
                    <MyTextInput name="password" placeholder="Hasło" type='password'/>
                    <ErrorMessage name='error' render={() => 
                    <Label style={{marginBottom: 10}} basic color='red' contet={errors.error}></Label>}
                    />

                   
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    );
})