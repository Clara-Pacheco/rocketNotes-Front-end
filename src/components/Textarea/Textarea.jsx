import { Container } from "./Styles";


export function Textarea({ value, ...rest}) {
  return (
    <Container {...rest}>
      { value }
    </Container>
  )
}