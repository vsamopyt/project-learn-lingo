import { useSelector } from "react-redux";
import clsx from "clsx"
import CommonButton from '../CommonButton/CommonButton';

import { selectFavouriteTeachers } from "../../redux/favourites/selectors";
import { IoMdHeart } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import css from "./TeachersListCard.module.css"

const TeachersListCard = ({ teacher, handleBtn }) => {
  const {
    key,
    name,
    surname,
    avatar_url,
    languages,
    lessons_done,
    rating,
    price_per_hour,
    lesson_info,
    conditions,
    levels,
    reviews,
  } = teacher;



  const favouriteItens= useSelector( selectFavouriteTeachers);
  const isFavourites = favouriteItens.some(item =>item.key === key);
  
  return (
    <>
      <span>{name}</span>
      <span>{surname}</span>
      <img src={avatar_url} alt="photo of teacher" width="50" />
      <p>{languages}</p>
      <span>{lessons_done}</span>
      <span>{rating}</span>
      <span>{price_per_hour}</span>
      <p>{lesson_info}</p>
      <p>{conditions}</p>
      <p>{levels}</p>
      {/* <CommonButton onHandle ={handleBtn }><CiHeart /></CommonButton> */}
      <CommonButton 
      classButton = {css.teachersListCardBtnIconHeart}
        onHandle={() => {
          handleBtn(teacher);
        }}
      >
        <CiHeart
          className={clsx(
            css.teachersListCardIconHeart,
            isFavourites && css.teachersListCardIconHeartActive
          )}
        />
      </CommonButton>

      {/* <p>{  reviews}</p> */}
    </>
  );
};
export default TeachersListCard;
