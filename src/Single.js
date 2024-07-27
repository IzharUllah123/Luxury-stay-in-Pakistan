import { useParams } from "react-router-dom"
import villas from "./villas"

function Single(){
    const {id}=useParams();
    const Numberid=Number(id)
    const filterData=villas.filter(villa=>villa.id===Numberid)[0];
    console.log("Filter data are",filterData)
    return(
        <>
        <section className="single">
          <div className="mainsingle">
            <h3>{filterData.name}</h3>
            
        
          <div className="image">

             <div className="four">
              <img src={filterData.image} alt={filterData.name}/>
              </div>
             <div className="subimges">
                <img src="/host.jpg" />
                <img src="/people.jpg" />
              <div className="subimges">
               
                <img src="/people.jpg" />
                <img src="/host.jpg" />
                </div>
            
              </div>
            
            </div>
       
           <div className="location">
           <div>
          <h3> {filterData.location}</h3>
          </div>
          {/* <div>
            <p>bathrooms:{filterData.bathrooms} / bedrooms: {filterData.bedrooms}</p>
            </div> */}
     
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209575.90519495378!2d72.19012559783528!3d34.840557164768114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc3dbd62484e13%3A0xf24b8f7632aff5f3!2sSwat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721823245555!5m2!1sen!2s"
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
          
           </div>
           </div>
        </section>
        
        </>
    )
}
export default Single;