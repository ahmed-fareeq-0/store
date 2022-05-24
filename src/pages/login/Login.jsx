import { Container, Wrapper, Title, Form, Input, Link, Button } from "./styleLogin";

const Login = () => {
  return (
      <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        </Wrapper>
      </Container>
  );
}

export default Login;
