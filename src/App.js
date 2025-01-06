import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";


const App = () => {

  
  return <div>

    <div>
          <h2>
            Our Testimonial
          </h2>
    </div>

    <div></div>

    <div>
      <Testimonial reviews ={reviews} />
    </div>

  
  </div>;
};

export default App;
