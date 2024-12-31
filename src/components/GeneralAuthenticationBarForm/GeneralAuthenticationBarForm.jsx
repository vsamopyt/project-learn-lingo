import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {signUp} from "../../redux/auth/operations"
import { regexEmail } from '../../constants/auth';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';

const schema = yup
  .object({
    name: yup.string().min(5).max(20).required(),
    email: yup.string().matches(regexEmail).required(),
    password: yup.string().length(7),
  })
  .required();

export default function GeneralAuthenticationBarForm({ elements }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch =useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.auth);

  const onSubmit = (data , actions)=> {
   dispatch(signUp(data));
   reset();
  }


  console.log(isLoading, isError, error);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {elements.map((element, index) => {
        const { name, type, placeholder, icons, isBtn, value } = element;

        return (
          <div key={index}>
            {isBtn === false ? (
              <>
                <input
                  {...register(`${name}`)}
                  placeholder={`${placeholder}`}
                  type={`${type}`}
                />
                {icons && (
                  <>
                    <GoEye /> <GoEyeClosed />
                  </>
                )}
                <p>{errors[name]?.message}</p>
              </>
            ) : (
              <input type={`${type}`} value={`${value}`} disabled={isLoading} />
            )}
          </div>
        );
      })}
    </form>
  );
}
