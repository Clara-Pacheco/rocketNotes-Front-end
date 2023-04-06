import { Container } from "./Styles";

export function Button({ title ='olá', loading , ...rest }) {
  return (
    <Container 
      type="button"
      disabled={loading}
      {...rest}
    >
      {title}
      {/* {loading ? 'Carregando...' : title} */}
    </Container>
  )
 
}