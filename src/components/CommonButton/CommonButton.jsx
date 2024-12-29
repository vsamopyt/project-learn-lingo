import css from "./CommonButton.module.css";

const CommonButton =({onHandle, children, classButton})=>{

    return (
        <button onClick={onHandle}  className={classButton}>
         {children}
        </button>
    )

};
export default CommonButton;