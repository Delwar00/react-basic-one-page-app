import SingleStudent from "./SingleStudent";
import { student } from "./db";

const Student=({title,content})=>{
    return(
        <>
         <section className="student"> 
            <div className="container my-5">
                <div className="row">
                   <div className="students-title">
                        <h2>{title}</h2>
                        <p>{content}</p>
                   </div>
                   <div className="row">
                        {
                            student.map(data=>
        
                                <SingleStudent name={data.name} photo={data.photo} skills={data.Skills}/>
                            )
                        }
                    </div>
                </div>
            </div>  
        </section>
        
        
        </>
    );
}
export default Student;