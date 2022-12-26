import { Container } from "@mui/material"
import Header from "./Header/Header"

type Props = {
  children: React.ReactNode
}

export default function(props: Props) {
  return <Container maxWidth="lg" style={{background: "#fdfdfd", padding: 0}}>
    <Header />
    {props.children}
  </Container>
}