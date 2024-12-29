import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { regexEmail } from '../../constants/auth';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';

const schema = yup
  .object({
    name: yup.string().min(5).max(20).required(),
    email: yup.string().matches(regexEmail).required(),
    password: yup.string().length(3),
  })
  .required();

export default function GeneralAuthenticationBarForm({ elements }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

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
              <input type={`${type}`} value={`${value}`} />
            )}
          </div>
        );
      })}
    </form>
  );
}
