import { useEffect } from "react";
import { useSelector} from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

import TeachersList from "../../components/TeachersList/TeachersList";
import { selectFavouriteTeachers, selectIsLoading } from "../../redux/favourites/selectors";


import css from "./FavouritesPage.module.css"
const FavouritesPage =()=> {
    const isLoading = useSelector(selectIsLoading)
    const favouriteTeachers = useSelector(selectFavouriteTeachers);



    return (
       

<section>
        <h1>FavouritesPage</h1>
        {/* {!isLoading && <CommonBarLoader/>} */}
        {isLoading && <CommonBarLoader />}
        {favouriteTeachers?.length > 0 && !isLoading && (
          <TeachersList teachers={favouriteTeachers} />
        )}
        {/* <TeachersList teachers={teachers} /> */}
        {/* {isLoadBtn && !hasFilter && (
          <CommonButton onHandle={handleBtn}>Load More</CommonButton>
        )} */}

{/* <TeachersList teachers={favouriteTeachers} handleBtn={HandleBtnFavourites} /> */}
      </section>

    )

};
export default FavouritesPage;