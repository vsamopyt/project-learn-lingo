import CommonButton from '../CommonButton/CommonButton';
// import css from "./GeneralAuthenticationBar.module.css";

const GeneralAuthenticationBar = ({ onOpen }) => {
    const handleBtn =(event)=>{
        const btn = event.target.textContent;
     onOpen(btn)  
    }
    
  return (
    <div>
      <CommonButton
        onHandle={handleBtn}
      >
        LogOut
      </CommonButton>
      <CommonButton
        onHandle={handleBtn}
      >
        LogIn
      </CommonButton>
      <CommonButton
        onHandle={handleBtn}
      >
        Registration
      </CommonButton>
    </div>
  );
};
export default GeneralAuthenticationBar;
