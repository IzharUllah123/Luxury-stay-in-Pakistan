import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function ContactUS(){
    return(
    
    <>
    <section className="maincontact">
    <div className="ContactUS">

      <h1>Contact US</h1>

      <p>We value your feedback and are here to assist you with any inquiries or concerns.
         Whether you have questions about our services, need assistance with bookings, 
         or simply want to share your experience, we're just a message away.

Feel free to reach out to us through our contact form, email, or phone.
 Our dedicated team is committed to providing you with prompt and helpful 
 responses. We look forward to hearing from you and ensuring your experience 
 with us is exceptional.

Thank you for choosing us. Your satisfaction is our priority.
      </p>

      <div className="contactimg">
        <div className="conimg">
             <img src="about.jpg" />
         </div>
         <div className="contctcard">
            <h2>Lets connect</h2>
            <p><span>Phone</span>+92-345678</p>
            <p><span>Email</span>Im@gmail.com</p>
            <p><span>Adress</span>Pwd Isb,Block-D</p>
              <div className="contcicon">
                   <a href="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL" target="blank"><FaFacebook />
                   </a>
                   <br></br>

                   <a href="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL" target="blank">  <FaLinkedin />
                   </a>
                  
               </div>
         </div>
      

      </div>
     
    </div>
    </section>
    
    
    </>)
}
export default ContactUS;