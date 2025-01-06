import React from 'react'
import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";


const Card = (props) => {

    let review = props.review;
  return (
    <div>

        <div>
           <img scr={review.image}></img>
        </div>

        <div>
            <h2>
                {review.name}
            </h2>
        </div>

        <div>
            {review.job}
        </div>

        <div>
            <FaQuoteLeft/>
        </div>

        <div>
            <p>{review.text}</p>
        </div>

        <div>
            <FaQuoteRight/>
        </div>

        
    </div>
  )
}

export default Card