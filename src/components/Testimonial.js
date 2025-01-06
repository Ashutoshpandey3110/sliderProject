import React from 'react'
import Card from './Card';
import { SlArrowLeft , SlArrowRight  } from "react-icons/sl";
import { useState } from 'react';

const Testimonial = (props) => {

    const [index , setIndex] = useState(0)

    function SlideLeft() {

        if(index-1 < 0) {
            setIndex(reviews.length - 1)
        }

        // review.lenght-1 ye Array ka last wala data hai

        else{
            setIndex(index-1);
        }
        
    }

    function SlideRight() {

        if(index+1 >= reviews.length) {
            setIndex(0);
        }

        else{
            setIndex(index+1);
        }
        
    }

    function Randomkrdo() {
     let randonText =   Math.floor(Math.random() * reviews.length);
     setIndex(randonText);
    }

    let reviews = props.reviews;
  return (
    <div>

        <div>
            <Card review ={reviews[index]}></Card>  

            {/* ek review pass krenge revies ka phla data */}     
        </div>

        <div>
            <button>
                <SlArrowLeft onClick={SlideLeft}/>
            </button>

            <button>
                <SlArrowRight onClick={SlideRight}/>
            </button>
        </div>

        <div>
            <button onClick={Randomkrdo}>
                Suprise me
            </button>
        </div>

    </div>
  )
}

export default Testimonial