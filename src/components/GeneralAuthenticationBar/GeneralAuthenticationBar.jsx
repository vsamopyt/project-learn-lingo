import CommonButton from '../CommonButton/CommonButton';
// import css from "./GeneralAuthenticationBar.module.css";

const GeneralAuthenticationBar = ({ onOpen, isOpen }) => {
  return (
    <div>
      <CommonButton
        onHandle={() => {
          onOpen(isOpen, 'logOut');
        }}
      >
        LogOut
      </CommonButton>
      <CommonButton
        onHandle={() => {
          onOpen(isOpen, 'logIn');
        }}
      >
        LogIn
      </CommonButton>
      <CommonButton
        onHandle={() => {
          onOpen(isOpen, 'signIn');
        }}
      >
        Registration
      </CommonButton>
    </div>
  );
};
export default GeneralAuthenticationBar;
