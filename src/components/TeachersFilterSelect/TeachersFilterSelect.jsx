const TeachersFilterSelect = ({ filterList, register, category }) => {
  return (
    <>
      <select {...register(`${category}`, { required: false })}>
        {filterList.map((filter, index) => {
          const { option, value } = filter;
          return (
            <option key={index} value={value}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default TeachersFilterSelect;
