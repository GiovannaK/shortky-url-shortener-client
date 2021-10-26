import React from 'react'
import { Button, ErrorText, Input, InputContainer } from './styles'
import { useForm } from "react-hook-form";

type InputProps = {
  originURL: string
}

export const Form = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const submit = (values: InputProps) => console.log(values);

  return (
    <>
      <InputContainer onSubmit={handleSubmit(submit)}>
        <Input type="text"
          {...register("originURL", {
            required: "Digite um link válido"
          })}
        />
        <Button type="submit">Encurtar</Button>
      </InputContainer>
      <ErrorText>{errors.originURL && errors.originURL.message}</ErrorText>
    </>
  )
}
