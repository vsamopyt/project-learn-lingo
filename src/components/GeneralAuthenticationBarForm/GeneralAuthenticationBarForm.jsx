import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, logIn, logOut } from '../../redux/auth/operations';
import { regexEmail } from '../../constants/auth';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import toast, { Toaster } from 'react-hot-toast';

const schemaSignUp = yup
  .object({
    name: yup.string().min(5).max(20).required(),
    email: yup.string().matches(regexEmail).required(),
    password: yup.string().length(7),
  })
  .required();

const schemaLogIn = yup
  .object({
    email: yup.string().matches(regexEmail).required(),
    password: yup.string().length(7),
  })
  .required();

const schemaLogOut = yup.object({}).required();

const getShema = (elements, schemaSignUp, schemaLogIn, schemaLogOut) => {
  switch (elements.length) {
    case 4:
      return schemaSignUp;
      break;
    case 3:
      return schemaLogIn;
      break;
    case 2:
      return schemaLogOut;
      break;
    default:
      console.log(`Sorry, we are out of ${shemaLogIn}.`);
  }
};

export default function GeneralAuthenticationBarForm({ elements }) {
  const schema = getShema(elements, schemaSignUp, schemaLogIn, schemaLogOut);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { isLoading, isError, error, isLoggedIn, user } = useSelector(state => state.auth);

  const onSubmit = data => {
    console.log('Form data:', data);
    console.log(elements.length);

    if (elements.some(el => el.value === 'Sign Up')) {
      console.log('sigbIn');

      dispatch(signUp(data));
    } else if (elements.some(el => el.value === 'Log In')) {
      console.log('LogIn');
      dispatch(logIn(data));
    } else if (elements.some(el => el.value === 'Log Out')) {
      console.log('LogOut');
      dispatch(logOut());
    }

    reset();
  };

  console.log(isLoading, isError, error, isLoggedIn, user);

  useEffect (()=>{
      if(user !== null &&  elements.length === 4) {
    toast.success('You signed in succesfully')
  };
  if(user !== null &&  elements.length === 3) {
    toast.success('You logged in succesfully')
  };
  if(user === null && elements.length === 2 && isLoggedIn === false) {
    toast.success(`You logged out succesfully`)
  };
  if(isError) {
    toast.error(`There is mistake ${error}`)
  };

  },[user, error, isLoggedIn])

  return (
    <form id={`id-${elements.at(-1)?.idKey}`} onSubmit={handleSubmit(onSubmit)}>
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
           <Toaster />
    </form>
  );
}
