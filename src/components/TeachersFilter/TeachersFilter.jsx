import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TeachersFilterSelect from '../TeachersFilterSelect/TeachersFilterSelect';
import { selectFilter } from '../../redux/filters/selectors';
import { updateFilter } from '../../redux/filters/slice';
import { updateHasFilter } from '../../redux/teachers/slice';
import { languages, levels, price } from '../../constants/filters';

const TeachersFilter = () => {
  const { register, handleSubmit, setValue } = useForm();
  const data = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onSubmit = formData => {
    dispatch(updateFilter(formData));
    dispatch(updateHasFilter(formData))

  };

  useEffect(() => {
    if (data) {
      setValue('languages', data.languages);
      setValue('levels', data.levels);
      setValue('price', data.price);
    }
  }, [data, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TeachersFilterSelect
        filterList={languages}
        register={register}
        category={'languages'}
      />
      <TeachersFilterSelect
        filterList={levels}
        register={register}
        category={'levels'}
      />
      <TeachersFilterSelect
        filterList={price}
        register={register}
        category={'price'}
      />

      <input type="submit" />
    </form>
  );
};
export default TeachersFilter;
