import { Link } from "react-router-dom";
import villas from "./villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
function Hotel(){
    return(<>
   
    <section className="hotel">

      

        <div className="mainhotel">

         <h1>ALL HOTEL</h1>
         <p>{villas.length} Properties</p>
         <div className="villas">
          {
            villas.map(item=>{
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
        </div>

    </section>
   
    
    
    
    </>)
}
export default Hotel;