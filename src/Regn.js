function Regn(){
    return(
    <section className="regions">
      <h1>OUR REGIONS</h1>
       <p>We offer two stunning regions to explore: the majestic
         Mountains and the picturesque Coastline. Discover the unique
         beauty and attractions each region has to offer.</p>
        <div className="regions_container">
            <div className="card">
                <img src="/region1.jpg" />
            
                   <h2> Mountains</h2>
                    <p><span>90</span> Properties</p>
              

                
            </div>


            <div className="card">
                <img src="/region2.jpg" />
                
                   <h2>Coastline</h2>   
                    <p ><span>52</span> Properties</p>
                
                
            </div>


        </div>
    
    
    </section>
   )
}
export default Regn;