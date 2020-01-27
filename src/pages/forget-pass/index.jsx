import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Container } from './styles'

const forgetPass = ({ history }) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  })

  return (
    <Container>
      <h1>Forget pass:</h1>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            history.push('/recovery-pass')
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
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </Container>
  )
}

forgetPass.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default forgetPass
