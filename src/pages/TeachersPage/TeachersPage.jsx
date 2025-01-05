import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getItems, getAllItems } from '../../redux/teachers/operations';
import {
  selectItems,
  selectSavedItems,
  selectTotalItems,
} from '../../redux/teachers/selectors';
import CommonButton from '../../components/CommonButton/CommonButton';
import TeachersList from '../../components/TeachersList/TeachersList';
import { selectStartKey } from '../../redux/filters/selectors';
import { updateStartKey } from '../../redux/filters/slice';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectItems);
  const startKey = useSelector(selectStartKey);
  const savedItems = useSelector(selectSavedItems);
  const allItems = useSelector(selectTotalItems);

  const isLoadBtn = savedItems < allItems && savedItems + 4 < allItems;

  const handleBtn = () => {
    const newStartKey = teachers[teachers.length - 1].key;

    dispatch(updateStartKey(newStartKey));
  };
  useEffect(() => {
    dispatch(getItems({ startKey }));
  }, [startKey]);

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  useEffect(() => {
    if (!isLoadBtn && allItems !== 0) {
      console.log(!isLoadBtn && allItems !== 0);
      toast('Sorry. There are no more teachers available.');
    }
    return;
  }, [isLoadBtn, teachers]);

  return (
    <>
      <section aria-label="filters">
        <h2>Filters</h2>
      </section>
      <section>
        <h1>Our Teachers</h1>
        <TeachersList teachers={teachers} />
        {isLoadBtn && 
          <CommonButton onHandle={handleBtn}>Load More</CommonButton>
        }
      </section>
      <Toaster />
    </>
  );
};
export default TeachersPage;
