import React, { useContext } from 'react'
import { Button, ErrorText, Input, InputContainer } from './styles'
import { useForm } from "react-hook-form";
import { ApiContext } from '../../context/ApiContext';

export type InputProps = {
  originURL: string
}

export const Form = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { sendLink, loading }: any = useContext(ApiContext)
  const submit = (values: InputProps) => {
    sendLink(values);
  }

  return (
    <>
      <InputContainer onSubmit={handleSubmit(submit)}>
        <Input type="text"
          {...register("originURL", {
            required: "Digite um link válido"
          })}
        />
        <Button type="submit">{loading ? 'Enviando...' : 'Encurtar'}</Button>
      </InputContainer>
      <ErrorText>{errors.originURL && errors.originURL.message}</ErrorText>
    </>
  )
}
