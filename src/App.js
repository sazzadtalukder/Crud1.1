import React, { useState } from 'react';
import Home from './MyComponent/Home';
import Form from './MyComponent/Form';
import Navbar from './MyComponent/Navbar';
import EditData from './MyComponent/EditData'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';


function App() {
  const [data,setData] = useState([])
  const Fetchfn = (values) => {
    setData([...data,values]);
  }
  const DeleteFn = (id) => {
    let newArray= data.filter((eld,indd)=>indd!=id);
    setData(newArray);
  }
  const UpdateFn = (update,id) => {
    let ans= data.map((el,ind)=>{
      if(ind==id)
        return update;
      else
        return el;
    }

    )
    setData(ans);
  }
   
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home datas={data} delete={DeleteFn}/>}/>
            <Route path='/form' element={<Form fetch={Fetchfn}/>}/>
            <Route path='/edit/:id' element={<EditData datas={data} update={UpdateFn}/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
