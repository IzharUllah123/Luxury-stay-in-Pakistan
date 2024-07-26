import { FaFacebook, FaLinkedin } from "react-icons/fa";


function Contact(){
    return(
        <>
          <div className="contact">
             <div className="contact_container">
                <div className="First_card">
                  <h1>Let Connect</h1>
                   <div className="subcard">
                    <div className="spn"> <span>Phone:</span> <p>+92 00 00 00</p> </div>
                    <div className="spn"> <span>Email:</span> <p>Ix@yaho.com</p></div>
                    <div className="spn"> <span>Address:</span>  <p>Block_3,Pk...</p></div>
                   
                   <div className="icn">
                   <a href="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL" target="blank"><FaFacebook />
                   </a>

                   <a href="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL" target="blank">  <FaLinkedin />
                   </a>
                  
                    </div>
                   </div>
                </div>
                <div className="Email">
                    <h1>We Would Love To Hear From You!</h1>
                    <form>
                     <div>
                         <input type="text" placeholder="Your Name"/>
                         <input type="email" placeholder="Email"/>
                    </div>
                          <textarea rows="4" placeholder="Your Message..."/>
                       <button type="submit">SEND</button>
                    </form>
                </div>
             </div>
          </div>
        
        </>
    )
}
export default Contact;