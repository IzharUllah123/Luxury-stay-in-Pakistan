import About from "./About";

function AboutUs(){
    return(
        <>
        <section id="aboutus" className="page">

           <div className="firstdev">

                 <div className="imgleft">
                   <img src="/about.jpg" />
                 </div>

                 <div className="right">
                  <h3>Your Peace of Mind is our First Priority</h3>
                  <p>At our hotels, your comfort and peace of mind are 
                    our top priorities. We strive to create a serene and 
                    relaxing environment for all our guests.</p>

                    <p>  Our dedication to excellence ensures that
 every aspect of your stay is thoughtfully designed. From our luxurious 
 rooms to our attentive service, we aim to provide an unparalleled experience.
</p>
<p>Join us and discover the perfect blend of tranquility and luxury. 
We look forward to welcoming you and making your stay unforgettable.
                  </p>

                 </div>

                   
           </div>
           <About/>
        </section>
        </>
    )
}
export default AboutUs;