import { Formik } from 'formik';
import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AuthenticationContext } from '../context/Authentication';

export const LoginForm = () => {
    const authCtx = useContext(AuthenticationContext);

    const schema = Yup.object().shape({
        email: Yup.string().email("Email must be valid").required("Email is required"),
        password: Yup.string().required("Password is required")
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setFieldError }) => {
                    if (values.email === 'test@test.com' && values.password === "password") {
                        authCtx.setIsAuthenticated(true);
                        authCtx.setUser({
                            id: 1,
                            username: 'test',
                            roles: ['TEST']
                        });
                    } else {
                        setFieldError("password", "Wrong email or password");
                        setFieldError("email", "Wrong email or password");
                    }
                }}
                initialValues={{
                    email: '',
                    password: ''
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group as={Col} lg="12" controlId="validationEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} lg="12" controlId="validationEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.password && !errors.password}
                                isInvalid={touched.password && !!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}