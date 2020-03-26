import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import { Form } from './styles'
import TextInput from '../../components/text-input'
import Button from '../../components/button'


const ForgotPass = ({ history }) => (
  <>
    <h1>Esqueci minha senha</h1>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        history.push('/senha-enviada')
      }}
    >
      {() => (
        <Form>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
          />

          <Button type="submit">
            Submit
          </Button>

        </Form>
      )}
    </Formik>
  </>
)

ForgotPass.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default ForgotPass
