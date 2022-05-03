import React, {useState} from 'react';
import people from "./data"
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";



function Reviews() {
    const  [index, setIndex] = useState(0)
    const  { name, image, text} = people[index]
    
    const checkNumber = (num) => {
        if(num > people.length - 1) {
            return 0
        }
        if(num < 0) {
            return people.length - 1
        }
        return num
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    return(
        <>
             <div className='title'>
                    <h2>Reviews</h2>
            </div>

            <div className='containerFluid'>
               
               
               <div className='content'>
                   <div className='imageDiv'>
                    <img src={image} alt={name} />
                   </div>
                   <div className='nameDiv' >
                       <h2>{name}</h2>
                   </div>
                   <div className='textDiv'>
                       <p>{text}</p>
                   </div>
                   
                   <div className='buttonDiv'>
                       <button onClick={prevPerson}> < FiChevronLeft /></button>
                       <button onClick={nextPerson}>  < FiChevronRight /> </button>
                   </div>
               </div>

               
            </div>
            
        </>
    )
}

export default Reviews

 