import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import CommonBarLoader from '../../components/CommonBarLoader/CommonBarLoader';
import CommonModalWindow from '../../components/CommonModalWindow/CommonModalWindow';
import { selectUser } from '../../redux/auth/selectors';
import { selectIsLoggedIn, selectEncodedUser } from '../../redux/auth/selectors';
import { getItems, getAllItems } from '../../redux/teachers/operations';
import {
  selectItems,
  selectSavedItems,
  selectTotalItems,
  selectIsLoading,
} from '../../redux/teachers/selectors';
import CommonButton from '../../components/CommonButton/CommonButton';
import TeachersFilter from '../../components/TeachersFilter/TeachersFilter';
import TeachersList from '../../components/TeachersList/TeachersList';
import { selectFilter } from '../../redux/filters/selectors';
import {
  selectStartKey,
  selectHasFilter,
} from '../../redux/teachers/selectors';
import { updateStartKey, updateHasFilter } from '../../redux/teachers/slice';
import css from './TeachersPage.module.css';

import { addFavouriteItem, deleteFavouriteItem} from '..//../redux/favourites/operations';
import { selectFavouriteTeachers } from '../../redux/favourites/selectors';
// import { addReducerFafouriteItem } from '../../redux/favourites/slice';
import { use } from 'react';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const teachers = useSelector(selectItems);
  const startKey = useSelector(selectStartKey);
  const savedItems = useSelector(selectSavedItems);
  const allItems = useSelector(selectTotalItems);
  const filters = useSelector(selectFilter);
  const hasFilter = useSelector(selectHasFilter);
  const isLoading = useSelector(selectIsLoading);
  const encodedUser =useSelector(selectEncodedUser)
  const favouriteTeachers = useSelector(selectFavouriteTeachers)

  const [isOpen, setIsOpen] = useState(false);

  // BTN load more ----
  const isLoadBtn = savedItems < allItems && savedItems + 4 < allItems;

  const handleBtn = () => {
    const newStartKey = teachers[teachers.length - 1].key;
    dispatch(updateStartKey(newStartKey));
  };

  useEffect(() => {
    if (!isLoadBtn && allItems !== 0) {
      console.log(!isLoadBtn && allItems !== 0);
      toast('Sorry. There are no more teachers available.');
    }
    return;
  }, [isLoadBtn, teachers]);
  //++++++++

  // -BTN Favourites
  const HandleBtnFavourites = item => {
    if (!isLoggedIn) {
      setIsOpen(true);
    } else {
    //  console.log(favouriteTeachers);
     
      const isFavourites = favouriteTeachers.some(favourite=>favourite.key === item.key);
      console.log(isFavourites);
      
      if(!isFavourites) {
        dispatch(addFavouriteItem({item, encodedUser}));
      }else {
        dispatch(deleteFavouriteItem({item,encodedUser}))

console.log("delete favourite");

      }
      
     
   

      // dispatch(addFavouriteItem({item, encodedUser}));
 
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  // +++++++++++

  useEffect(() => {
    dispatch(getItems({ startKey, filters }));
  }, [startKey, filters]);

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <>
      <section aria-label="filters">
        <h2>Filters</h2>
        <TeachersFilter />
      </section>
      <section>
        <h1>Our Teachers</h1>
        {/* {!isLoading && <CommonBarLoader/>} */}
        {isLoading && <CommonBarLoader />}
        {teachers?.length > 0 && !isLoading && (
          <TeachersList teachers={teachers} handleBtn={HandleBtnFavourites} />
        )}
        {/* <TeachersList teachers={teachers} /> */}
        {isLoadBtn && !hasFilter && (
          <CommonButton onHandle={handleBtn}>Load More</CommonButton>
        )}
      </section>
      <Toaster />
      <CommonModalWindow isOpen={isOpen} onClose={onClose}>
        You should be logged in to use this options
      </CommonModalWindow>
    </>
  );
};
export default TeachersPage;
