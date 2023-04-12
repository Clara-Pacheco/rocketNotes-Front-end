import { Container, Form } from './Styles'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

import {FiMail, FiLock} from'react-icons/fi'

export function SignIn() {
 return (
  <Container>
  <Form >
    <h1>Rocket Notes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>
    <h2>Faça seu login</h2>
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
     <Button>
      Entrar
     </Button>




  </Form>
  </Container>
 )

}