/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import AppContext from '../../context'
import { Form } from './styles'
// components
import Button from '../../components/button'
import TextInput from '../../components/text-input'

const Login = () => {
  const context = useContext(AppContext);

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', pass: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            context.setSigned(true)
          }, 1000);
        }}
      >
        {() => (
          <Form>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
            />

            <TextInput
              type="password"
              name="pass"
              placeholder="Senha"
            />

            <Button type="submit">Submit</Button>

            <Link to="/esqueci-minha-senha">Esqueci minha senha</Link>

          </Form>
        )}
      </Formik>

      <Link to="/">Não possui cadastro? Cadastrar</Link>
    </>
  )
}

export default Login
