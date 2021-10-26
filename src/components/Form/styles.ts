import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
  width: 100%;
`

export const Input = styled.input`
  width: 70%;
  padding: 0.6rem;
  font-size: 1.4rem;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  color: #5e00ff;
  border: 2px solid #5e00ff;

  &:focus{
    border: 2px solid #E17900;
  }

  @media(max-width: 800px) {
    width: 90%;
  }
`

export const ErrorText = styled.p`
  font-size: 1rem;
  color: red
`

export const Button = styled.button`
  font-size: 1.3rem;
  color: #fff;
  background-color: #5e00ff;
  cursor: pointer;
  border: none;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover{
    opacity: 0.5;
  }

  @media(max-width: 800px) {
    font-size: 1rem;
  }
`