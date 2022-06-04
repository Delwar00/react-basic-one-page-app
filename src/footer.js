import { Component } from "react"

class Footer extends Component{
    render(){
        return(
             <>
                <section className="footer"> 
                    <div className="container my-5">
                        <div className="row">
                           <div class="footer-text text-center">@copy right reserved by delwar</div>
                        </div>
                    </div>  
                </section>
            </>
            );  
    }
}
export default Footer;