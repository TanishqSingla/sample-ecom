import { Container } from "@mui/material"
import Header from "./Header/Header"

type Props = {
  children: React.ReactNode
}

export default function(props: Props) {
  return <Container maxWidth="lg" style={{background: "#000", height: "100vh"}}>
    <Header />
    {props.children}
  </Container>
}