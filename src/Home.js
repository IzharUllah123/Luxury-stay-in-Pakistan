import Herosection from "./Herosection";
import Topvillas from "./TopVillas";
import Regn from "./Regn";
import OurSpecialties from "./OurSpecialties";
import Host from "./Host";
import About from "./About";
import Contact from "./Contact";

function Home(){
    return(
        <>
        <Herosection />
        <Topvillas />
        <Regn />
        <OurSpecialties />
        <Host />
        <About />
        <Contact />
        </>
    )
}
export default Home;