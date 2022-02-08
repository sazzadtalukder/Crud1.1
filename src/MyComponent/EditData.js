import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditData = (props) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const nevigate = useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        let myUpdateData = props.datas[id];
        setFirstName(myUpdateData.firstName);
        setLastName(myUpdateData.lastName);
        setEmail(myUpdateData.email);
    },[])
    const updateData = () => {
       
        props.update({firstName,lastName,email},id);
        setFirstName('');
        setLastName('');
        setEmail('');
        nevigate('/');
        
    }
     
    return ( 
        <form>
            <div class="form-group">
            <label>First Name</label>
            <input 
            type="text" 
            class="form-control"
            value= {firstName}  
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="Enter First Name"/>
            
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input 
            type="text" 
            class="form-control"  
            value= {lastName}  
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Enter Last Name"/>
            
        </div>
        <div class="form-group">
            <label>Email address</label>
            <input 
            type="email" 
            class="form-control" 
            value= {email}  
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"/>
            
        </div>
        <button type="button" class="btn btn-primary" onClick={updateData}>Update</button>
        </form>
    );
}
 
export default EditData;