import { Component } from "react";

class SingleTeacher extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        const {name,photo,skills}=this.props;
        return(
            <>
               <div className="col-md-3">
                        <div className="card text-left shadow">
                        <img class="card-img-top" src={photo} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Skills:{skills} </p>
                            </div>
                        </div>
                    </div> 
            </>
        );
    }
}
export default SingleTeacher;