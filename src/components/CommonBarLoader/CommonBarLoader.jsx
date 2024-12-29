import { BarLoader } from 'react-spinners';
import css from "./CommonBarLoader.module.css"

const CommonBarLoader = ()=> {

    return (
        <div className={css.commonBarLoaderWrapper}>
            <BarLoader 
            color={"#ff4500"}
            width={120}
            height={6}
            aria-label="Loading Spinner"
            />
        </div>
    )
};
export default CommonBarLoader;
