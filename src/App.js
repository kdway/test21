import React from 'react';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Register from './pages/Register'
import {BrowserRouter} from 'react-router-dom';





import {BrowserRouter as Routes ,Switch,Route } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Navbar />
         <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Home} />
               
                <Route path="/Contact" component={Contact} />
                <Route path="/Blogs" component={Blogs} />
                <Route path="/Rgister" component={Register} />
                <Route path="/Navbar" component={Navbar} />
              
            
             
            
                


           </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;