import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth, createUserWithEmailAndPassword } from "../firebase";

const SignUp = () => {
  console.log("sign-up");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //입력값 상태
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");

  const register = async () => {
    try {
      setErrorMsg("　");
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      //console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      //console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Title>
        <h2>오늘, 운취</h2>
        <br />
        <span>오늘, 운동에 취하다.</span>
        <span>by your side</span>
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputContainer>
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
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="tel"
            placeholder="휴대폰 번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </InputContainer>
        <SelectContainer>
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="" disabled hidden>
              년도
            </option>
            {Array.from({ length: 100 }, (v, i) => 2022 - i).map((year) => (
              <option key={year} value={year}>
                {year + "년"}
              </option>
            ))}
          </Select>
          <Select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="" disabled hidden>
              월
            </option>
            {Array.from({ length: 12 }, (v, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month + "월"}
              </option>
            ))}
          </Select>
          <Select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="" disabled hidden>
              일
            </option>
            {Array.from({ length: 31 }, (v, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day + "일"}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <InputContainer>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              남자
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              여자
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="gender"
                value="etc"
                checked={gender === "etc"}
                onChange={(e) => setGender(e.target.value)}
              />
              기타
            </RadioLabel>
          </RadioContainer>
        </InputContainer>
        <Button type="submit">회원가입</Button>
      </Form>
    </>
  );
};

export default SignUp;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  & h2 {
    color: #001e6c;
    font-size: 40px;
    margin: 0;
  }
  & span {
    color: #80838e;
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 5px 5px;
  }
`;
const Form = styled.form`
  display: flex;
  width: 480px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 20px 40px;
  border: 2px solid #001e6c;
  border-radius: 20px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  border: 1px solid #001e6c;
  border-radius: 10px;
  margin: 10px 0;
`;

const Input = styled.input`
  /* width: 100%; */
  height: 100%;
  font-size: 1rem;
  color: #333;
  padding: 10px 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  &::placeholder {
    color: #bbb;
    font-size: 0.9rem;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Select = styled.select`
  text-align: center;
  width: 33%;
  height: 50px;
  font-size: 1rem;
  color: #333;
  border: 1px solid #001e6c;
  border-radius: 10px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 1rem;
  color: #333;
`;

const RadioInput = styled.input`
  margin-right: 0.3rem;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;
