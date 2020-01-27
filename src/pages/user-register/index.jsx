import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Container } from './styles'

const userRegister = ({ history }) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    pass: Yup.string()
      .required('Required'),
  })

  return (
    <Container>
      <h1>User Register:</h1>
      <Formik
        initialValues={{ name: '', email: '', pass: '' }}
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
              type="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" />
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
    </Container>
  )
}

userRegister.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default userRegister
