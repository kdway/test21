import React from 'react';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../style/Home.css';
import {Product} from './Product';
import {Phone} from './Phone';


const Home=()=> {
    const [image, setImage] = useState("image");
    const routes = [
        {
          
            path: "/Product1",
            exact: true,
            sidebar: () => <div>Product1!</div>,
            main: () =>
            

            <div class="card-group me-5 mt-5" >
            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50 ms-5" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                
              </div>
            </div>


            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                
              </div>
            </div>
          </div>
               


        
    
               
             
            
          
  
                        
          },
          {
            path: "/Product2",
            sidebar: () => <div>Product2!</div>,
            main: () =>       
            <div class="card-group me-5 mt-5">
            <div class="card m-4 round shadow-lg">
              <img src="./2.jpg" class="card-img-top card-img-top w-50 ms-5 " alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./2.jpg" class="card-img-top card-img-top w-50 ms-5" alt="..."/>
              
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
               
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./2.jpg" class="card-img-top card-img-top w-50 ms-5" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
           
              </div>
            </div>
          </div>
          },
          {
            path: "/Prodduct3",
            
            sidebar: () => <div>Product3!</div>,
            main: () =>  

            <div class="card-group me-5 mt-5" >
            <div class="card m-4 w-50">
              <img src="./1.jpg" class="card-img-top w-50 ms-5" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                
              </div>
            </div>
            <div class="card m-4 round shadow-lg">
              <img src="./1.jpg" class="card-img-top w-50" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                
              </div>
            </div>
          </div>

          },
          {
              path: "/Prodduct4",
              sidebar: () => <div>Product4!</div>,
              main: () => <h2>Product4</h2>
            },
            {
              path: "/Prodduct5",
              sidebar: () => <div>Product5!</div>,
              main: () => <h2>Product5</h2>
            }
  
        ];
    return (
        <>


     
        <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "white"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li className='Headphone' style={{color: "green"}}>
                <Link to="/Product1">Headphones</Link>
              </li>
              <li>
                <Link to="/Product2">Product2</Link>
              </li>
              <li>
                <Link to="/Product3">Product3</Link>
              </li>
              <li>
                <Link to="/Product4">Product4</Link>
              </li>
              <li>
                <Link to="/Product5">Product5</Link>
              </li>
            </ul>
  
            <Switch>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>
  
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>


      <div className='container mb-5 shadow-lg rounded'>
              <div className='row'>
                <div className='row-8'>
                    <h1 className='h-color'style={{marginTop:'2em',textAlign:'center'}}>Collection Models Headphone Pro xw350</h1>
                    <strike><h1 className='price' style={{marginTop:'0.8em',textAlign:'center',marginLeft:'-1.5em'}}>150.0€</h1></strike>
                    <h1 className='price' style={{marginTop:'-1.3em',textAlign:'center',marginLeft:'8.1em',color:'red'}}>100.0€</h1>
                    <p className='h-color'style={{marginTop:'1em',textAlign:'center',fontSize:'25px'}}>Le Sony WH-1000XM4 est un casque bluetooth embarquant une réduction de bruit active. Successeur du très populaire XM3, il reprend les éléments qui ont fait le succès de son prédécesseur avec l'ajout d'un multipoint pour connecter plusieurs périphériques en même temps et une fonctionnalité permettant de réduire le volume du casque en parlant à quelqu'un. Il est compatible Hi-RED et 360 Reality Audio et intègre Google Assistant et Amazon Alexa.</p>
                    <img className='haupt-product w-50 h-50'  style={{marginTop:'2em',marginLeft:'17em'}} src={image}/>
                   
                </div>
                <div className='row-6'style={{marginTop:'-7em'}}>
                   <div className='colors'>
    <button
        type="button rounded m-2" 
        onClick={() => setImage("./9.jpg")}
      ><img className='index0 m-2 round' src='/9.jpg'/></button>
      <button
        type="button m-2"
        onClick={() => setImage("./6.jpg")}
      ><img className='index1 m-2'  src='/6.jpg'/></button>
      <button
        type="button"
        onClick={() => setImage("./8.jpg")}
      ><img className='index2' src='/8.jpg'/></button>
      <button
        type="button"
        onClick={() => setImage("./10.jpg")}
      ><img className='index3' src='/10.jpg'/></button>
      
    </div>            
      
                
             
    

                </div>
                
           
              

              </div>

            </div>



    

<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {Product.map((product, index) => {
      return (
        <div className="card">
        
             
              <img className='image w-75 h-50 ms-5 mt-2' src={ product.img}></img>
           
        
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          
          <strike><h3 className='price' style={{marginLeft:'2em'}}>{product.price}.00£</h3></strike>
          <h3 className='price bg-info' style={{marginLeft:'7em',marginTop:'-1.5em'}}>{product.priceReduction}.00£</h3>
          <button type="button" class="btn btn-light round mt-5" style={{marginLeft:'6em'}} ><strong>View Details</strong></button>
       
        </div>
      )
    })}
  </div>

  
<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {Phone.map((product, index) => {
      return (
        <div className="card">
        
             
              <img className='image' src={ product.img}></img>
           
        
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          
          <strike><h3 className='price' style={{marginLeft:'2em'}}>{product.price}.00£</h3></strike>
          <h3 className='price bg-info' style={{marginLeft:'7em',marginTop:'-1.5em'}}>{product.priceReduction}.00£</h3>
          <button type="button" class="btn btn-light round mt-5" style={{marginLeft:'6em'}} ><strong>View Details</strong></button>

       
        </div>
      )
    })}
  </div>
        

            
    

      

      </>
    )
}

export default Home
