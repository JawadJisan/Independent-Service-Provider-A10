import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Home/Header/Header';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Home/Footer/Footer';

function App() {
  return (
    <div className="">

      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/services' element={<Services/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/checkout/:name' element={
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
       }></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
