import Footer from "./footer";
import HeaderMain from "./header";
import Middle from "./middle";
import Student from "./Student";
import Teacher from "./Teacher";

function App() {
  return (
   <>
   <HeaderMain/>
   <Student title="Our All Students" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum has been added"/>
   <Middle/>
   <Teacher title="Our All Teachers" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum has been added"/>
   <Footer/>
   </>
  );

  }
export default App;
