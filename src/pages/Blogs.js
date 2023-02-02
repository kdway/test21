import react from 'react';
import { useState, useEffect } from "react";
const Blogs = () =>{
    const [image, setImage] = useState("image");
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 40);
      }, [count]); // <- add the count variable here
   
    return(

        <div className='container shadow-lg mt-5 mb-1 rounded bg-light flyer'>
        <div className='row'>
            <div className='col-6 image'>
            <img className='haupt-product w-75 h-75'  style={{marginTop:'5em',marginLeft:'7em'}} src={image}/>
            </div>
            <div className='col-6 mt-5'>
                <h3 className='head' style={{textAlign:'center'}}>Headphone pro</h3>
                <p className='para mt-3'>Some quick example text to build on the card title and make up the bulk of the card's content</p>
                <h4 className='color'>colors:</h4>
              <div className='colors' style={{marginTop:'-5em'}}>
             
              <button type="button" className='blue bg-info m-2 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./s3.jpg")}></button>

              <button type="button" className='blue bg-secondary m-2 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./s2.jpg")}></button>


              <button type="button" className='blue bg-warning m-2 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./s1.jpg")}></button>

              <button type="button" className='blue bg-white m-2 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./h-w1.webp")}></button>
              
              </div>
              <h4 className='color mb-3'>Quantity:</h4>
                 <p className='disp-count ms-5' style={{fontSize:'25px'}}><strong>Count</strong>: {count}</p>
                 <div className='count w-25 rounded ' style={{marginLeft:'17em',display:'flex', marginTop:'-2.8em'}}>
                 <button onClick={() => setCount((c) => c + 1)}>+</button>
                 <button onClick={() => setCount((c) => c - 1)}>-</button>
               

                 </div>
                 <div className='price mt-5 ms-5'>
                <p className='somme'style={{fontSize:'30px'}} >La somme est: <span style={{fontSize:'40px',color:'red',marginLeft:'2em'}}>{calculation}€</span></p>
                </div>

                <div className='Buy mt-5' style={{marginLeft:'15em'}}>
                    <a href='/Register'><button className='Buy-Now bg-info rounded' style={{width:'10em',height:'2.8em'}}>Buy Now</button></a>
                    

                </div>
                
               
             
              
               
             
                 
             

          </div>
            </div>

          
           
            
           

        </div>


    )

}

export default Blogs