import React from 'react';
import { Link } from 'react-router-dom';


const Home = (props) => {

    return ( 
        <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.datas.map((el,ind)=>{
            return(
              <tr key={ind}>
              <th scope="row">{ind+1}</th>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.email}</td>
              <td><button className='btn btn-dark'><Link to={`edit/${ind}`}>Edit</Link></button> <button className='btn btn-danger' onClick={()=>props.delete(ind)}>Delete</button></td>

              </tr>
            );
          }

          )}
    
         
        </tbody>
      </table>
     );
}
 
export default Home;