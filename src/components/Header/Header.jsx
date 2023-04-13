import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from './Styles'

export function Header() {
  return(
    <Container>
        <Profile to="/profile">
          <img 
            src="https://github.com/Clara-Pacheco.png"
            alt='Imagem do usuário'
          />

          <div>
              <span>Bem vindo,</span>
              <strong>Clara Pacheco</strong>
          </div>
        </Profile>

        <Logout>
          <RiShutDownLine />
        </Logout>
    </Container>
  )

}