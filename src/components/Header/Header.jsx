import { Container, Profile } from './Styles'

export function Header() {
  return(
    <Container>
       <Profile>
          <img 
            src="https://github.com/Clara-Pacheco.png"
            alt='Imagem do usuário'
          />

          <div>
              <span>Bem vindo,</span>
              <strong>Clara Pacheco</strong>
          </div>


       </Profile>



    </Container>
  )

}