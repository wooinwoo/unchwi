import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth, signInWithEmailAndPassword } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(curUserInfo);
      // setUser(curUserInfo.user);
    } catch (err) {
      // setIsAppropriate(false);
      // console.log(err.code);
      /*
    입력한 아이디가 없을 경우 : auth/user-not-found.
    비밀번호가 잘못된 경우 : auth/wrong-password.
    */
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(1);
    event.preventDefault();
    login();
    // TODO: 로그인 처리 코드 작성
  };

  return (
    <>
      <Title>
        <h2>로그인</h2>
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">로그인</Button>
        </ButtonContainer>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </Form>
    </>
  );
};

const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  width: 300px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: red;
  margin-top: 10px;
`;

export default SignIn;
