import { Component } from "react";
import SingleTeacher from "./SingleTeacher";
import { teacher } from "./db";

class Teacher extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {title,content}=this.props;
        return(
            <>
            <section className="teacher"> 
                    <div className="container my-5">
                        <div className="row">
                        <div className="students-title">
                                <h2>{title}</h2>
                                <p>{content}</p>
                        </div>
                        <div className="row">
                            {
                                teacher.map(data=>
                                    <SingleTeacher name={data.name} photo={data.photo} skills={data.Skills}/>
                                 )
                            }
                            
                        </div>
                            
                        </div>
                    </div>  
                </section>
            </>
        );
    }
}
export default Teacher;