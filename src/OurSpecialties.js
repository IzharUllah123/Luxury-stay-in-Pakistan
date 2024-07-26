import { SiWeightsandbiases } from "react-icons/si";
import { MdFitnessCenter, MdElectricCar, MdOutlinePets } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./all.css"

function OurSpecialties(){
 const Specialities=[
    {
        id:1,
        title:"Seafront",
        icon:<SiWeightsandbiases />,
        subText:"Have a look"
    },
    {
        id: 2,
        title: "Pet Friendly",
        icon: <MdOutlinePets />,
        subText: "Pets allowed"
      },
      {
        id: 3,
        title: "Electric Car",
        icon: <MdElectricCar />,
        subText: "Change your car"
      },
      {
        id: 4,
        title: "Fitness/Gym",
        icon: <MdFitnessCenter />,
        subText: "Work out"
      },
      {
        id: 5,
        title: "Boat Morning",
        icon: <FaSailboat />,
        subText: "Take a trip"
      },

 ];

    return(
        <>
    l<div className="Specialities">
        <h1>OUR SPECIALITIES</h1>
        <div className="Special">
            {
                Specialities.map(item=>{
                    return(
                    <div className="CARD">
                        <div className="title">{item.title} </div>
                        <div className="icon">{item.icon}</div>
                        <div className="subtext">{item.subText}</div>
                    </div>
                    )
                })
            }

        </div>
        </div>
        </>
    )
}
export default OurSpecialties;