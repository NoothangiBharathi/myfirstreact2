// import React from 'react'
// import Curd from './Curd'
// import Home from './Home'
// import About from './About'
// import Blog from './Blog'
// import ContactUs from './ContactUs'
// import Login from './Login'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



// import Bootstrap from './Bootstrap'
// import './App.css'
// import BootStrap2 from './BootStrap2'
// import BootStrap3 from './BootStrap3'
// import BootStrap4 from './BootStrap4'




// const Header=()=>{
//   return(

//     <div className="navbar">

//     <ul>

//      <li><Link to="/">Home</Link></li>
    
//     <li><Link to="about">About</Link></li>
//      <li><Link to="/blog">Blog</Link></li>
//      <li><Link to="/contactus">ContactUs</Link></li>
//      <li><Link to="/login">Login</Link></li>


//     </ul>

//      </div>

//    )
//  }



// const App = () => {
//    return (

      
//      <>

     
//       <BrowserRouter>
//       <Header/>
//      <Routes>
//        <Route path="/"  element={<BootStrap2/>} />

//        <Route path="/About"   element={<Bootstrap/>} />
//        <Route path="/Blog"  element={<BootStrap3/>} />
//        <Route path="/ContactUs"  element={<Bootstrap/>} />
      

//      </Routes>
//      </BrowserRouter>



//      <BootStrap4/>

     
//     </>
   
    
    
    
//   )
// }

// export default App







// import React from 'react'
// import './App.css'
// import BootStrap4 from './BootStrap4'
// import FormEvents from './src/FormEvents'

// import './App.cs'

// function App() {
//   return (
//     <div>

//     <BootStrap4/>
//     <FormEvents/>

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import reducer from './reducer'
// import Counter from './Counter'




// import './App.css'




// function App(){
//   return(
//     <reducer/>
    
//   )
// }










import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductCategery from './ProductCategery'
import SelectProductById from './SelectProductById'
// import Greeting from './Greeting'
// import FetchCategory from './FetchCatagory.js'
// import ProductCatagory from './ProductCatagory.jsx'




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductCategery />} />
        <Route path='/selectProduct' element={<SelectProductById />}/>
      </Routes>

    </div>
  )
}

export default App












// import React, { useContext } from 'react';
// import { ThemeContext, ThemeProvider } from './ThemeContext';

// function MainComponent() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div style={{
//       background: theme === "light" ? "#fff" : "#333",
//       color: theme === "light" ? "#000" : "#fff",
//       height: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "column"
//     }}>
//       <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <MainComponent />
//     </ThemeProvider>
//   );
// }

// export default App;
