import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container } from './styles'

const login = ({ history }) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    pass: Yup.string()
      .required('Required'),
  })

  return (
    <Container>
      <h1>Login:</h1>
      <Formik
        initialValues={{ email: '', pass: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            history.push('/')
          }, 1000)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" />
            <Field
              type="password"
              name="pass"
              placeholder="Pass"
            />
            <ErrorMessage name="pass" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <Link to="/forget-pass">Esqueci a senha</Link>
    </Container>
  )
}

login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default login
