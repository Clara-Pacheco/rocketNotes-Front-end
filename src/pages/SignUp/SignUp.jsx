import { Container, Form, Background } from './Styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

import {FiMail, FiLock, FiUser} from'react-icons/fi'

export function SignUp() {
 return (
  <Container>

  <Background />

  <Form >
    <h1>Rocket Notes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>
    <h2>Crie sua conta</h2>

    <Input
      icon={FiUser}
      placeholder="Nome"
      type="text"
     /> 

    <Input
      icon={FiMail}
      placeholder="Email"
      type="text"
     /> 

    <Input
      icon={FiLock}
      placeholder="Senha"
      type="password"
     /> 

     <Button title="Cadastrar" />

      <Link to="/">
        Voltar para o login
      </Link>
  </Form>

  </Container>
 )

}