import TeachersListCard from "../TeachersListCard/TeachersListCard";
const TeachersList =({teachers,handleBtn}) => {

    return (
     
        
       <ul>
        {teachers.map((item)=>{
           return ( <li key ={item.key}>
            <TeachersListCard teacher ={item} handleBtn={handleBtn}/>
            </li>)
        })}
       </ul>
    )

};

export default TeachersList;