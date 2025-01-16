import CommonButton from "../CommonButton/CommonButton";
import { IoMdHeart} from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const TeachersListCard = ({ teacher, handleBtn }) => {
  const {
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
  } = teacher

  return (
    <>
    <span>{name}</span>
    <span>{surname}</span>
    <img src={avatar_url}alt="photo of teacher" width="50"/>
    <p>{  languages}</p>
    <span>{ lessons_done}</span>
    <span>{ rating}</span>
    <span>{price_per_hour}</span>
    <p>{lesson_info}</p>
    <p>{ conditions}</p>
    <p>{ levels}</p>
    {/* <CommonButton onHandle ={handleBtn }><CiHeart /></CommonButton> */}
    <CommonButton onHandle ={()=>{handleBtn(teacher)} }><CiHeart /></CommonButton>

    {/* <p>{  reviews}</p> */}

    </>
  )
};
export default TeachersListCard;
