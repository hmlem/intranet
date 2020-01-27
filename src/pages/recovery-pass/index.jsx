import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Container } from './styles'

const recoveryPass = ({ history }) => {
  const SignupSchema = Yup.object().shape({
    pass: Yup.string()
      .required('Required'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass'), null], "Passwords doesn't match")
      .required('Required'),
  })

  return (
    <Container>
      <h1>Recovery Pass:</h1>
      <Formik
        initialValues={{ pass: '', confirmPass: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            history.push('/login')
          }, 1000)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="password"
              name="pass"
              placeholder="Pass"
            />
            <ErrorMessage name="pass" />
            <Field
              type="password"
              name="confirmPass"
              placeholder="Confirm Pass"
            />
            <ErrorMessage name="confirmPass" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </Container>
  )
}

recoveryPass.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default recoveryPass
