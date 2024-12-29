import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {regexEmail} from "../../constants/auth"

const schema = yup
  .object({
    firstName: yup.string().min(5).max(20).required(),
    // email: yup.string().required(),
    // email: yup.string().matches(/^\S+@\S+\.\S+$/).required(),
    email: yup.string().matches(regexEmail).required(),
    password: yup.string().length(3)
  })
  .required()

export default function GeneralAuthenticationBarSignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  )
}