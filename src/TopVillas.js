import './all.css';
import { Link } from "react-router-dom";
import villas from "./villas";
import { RxDot } from "react-icons/rx";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
function Topvillas(){
    return(<>
     <section id="topvillas">
       <h1>Top Hotels of Pakistan</h1>
<p>
Welcome to Top Hotels of Pakistan! Explore our exceptional 
hotels and their various room types. Detailed information about 
each hotel, including the number of bedrooms and other amenities,
 is provided to help you choose the perfect stay. 
Discover the best hotels in Pakistan and plan your stay with confidence.</p>
       <div className="villas">
          {
            villas.slice(0,3).map(item=>{
                return(
                <Link className='card' to={`/villa/${item.id}` }>
                 <img src={item.image} alt={item.name}/>
                 <div className="location_text">
                   <span>  {item.location} </span>
                   <span><RxDot /></span>
                   <span>{item.category}</span>
                
                 </div>
                 
                 <div className="title_text">
                    {item.name}
                 </div>
                 <div className="specification">
                    <div className="spec">
                        <IoIosPeople />
                        <span>{item.guests}</span>
                        Guests
                    </div>

                    <div className="spec">
                        <FaBed />
                        <span>{item.bedrooms}</span>
                        Bedroom
                    </div>

                    <div className="spec">
                        <BiArea />
                        <span>{item.squareMeter}</span>
                        Area
                    </div>

                    <div className="spec">
                        <FaBath />
                        <span>{item.bathrooms}</span>
                        Bathrooms
                    </div>
                    
                     </div>

                </Link>     
                )
            })
          }




       </div>

    
    
    
       </section>
            </>)
}

export default Topvillas;