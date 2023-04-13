import { Container, Form, Avatar } from "./Styles";

import { FiArrowLeft,FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>  
      </header>
    <Form>
      <Avatar>
        <img 
          src="https://github.com/Clara-Pacheco.png" 
          alt="Foto do usuário" 
        />

        <label htmlFor="avatar">
          <FiCamera />

          <input 
            id="avatar"
            type="file"
          />

        </label>

      </Avatar>
      <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />

      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />

      <Input
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
      />

      <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
      />

      <Button title="Salvar" />

    </Form>
    </Container>
  )
}