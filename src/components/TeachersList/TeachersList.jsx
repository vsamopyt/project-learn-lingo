import TeachersListCard from "../TeachersListCard/TeachersListCard"
const TeachersList =({teachers}) => {

    return (
       <ul>
        {teachers.map((item)=>{
           return ( <li key ={item.key}>
            <TeachersListCard teacher ={item}/>
            </li>)
        })}
       </ul>
    )

};

export default TeachersList;