import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Home/Header/Header';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/checkout' element={
         <RequireAuth>
           <Checkout/>
         </RequireAuth>
       }></Route>
       <Route path='/ervices' element={<Services/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
