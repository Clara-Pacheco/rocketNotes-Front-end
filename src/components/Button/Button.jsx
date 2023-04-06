import { Container } from "./Styles";

export function Button({ title, loading , ...rest }) {
  return (
    <Container 
      type="button"
      disabled={loading}
      {...rest}
    >
      { title } 
 
    </Container>
  )
 
}