import React,{useState} from 'react';
const Form = (props) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const saveData = (e) => {
        e.preventDefault();
        props.fetch({firstName,lastName,email});
        setFirstName('');
        setLastName('');
        setEmail('');
        
    }
     
    return ( 
        <form onSubmit={saveData}>
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
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;