import React,{useState} from "react";

const MyForm = (props) => {
    const [fName,setFName] = useState() 
    const [lName,setlName] = useState() 
    const [email,setEmail] = useState() 
    const [password,setPassword] = useState() 
    const [cPassword,setCPassword] = useState() 

    return (
        <div>
            <form >
                <div>
                    <label> First Name:</label>
                    <input type="text"  onChange={ (e) => setFName(e.target.value)}  />
                </div>
                <div>
                    <label> Last Name:</label>
                    <input type="text"  onChange={ (e) => setlName(e.target.value)}  />
                </div>
                <div>
                    <label> Email:</label>
                    <input type="email"  onChange={ (e) => setEmail(e.target.value)}  />
                </div>   
                <div>
                    <label> Password:</label>
                    <input type="password"  onChange={ (e) => setPassword(e.target.value)}  />
                </div> 
                <div>
                    <label> Confirm Password:</label>
                    <input type="password"  onChange={ (e) => setCPassword(e.target.value)}  />
                </div>   
            </form>
            <h3>Your Data</h3>
            <form >
                <div>
                    <label> First Name:</label>
                    <label > {fName}</label>
                </div>
                <div>
                    <label> Last Name:</label>
                    <label > {lName}</label>
                </div>
                <div>
                    <label> Email:</label>
                    <label > {email}</label>
                </div>
                <div>
                    <label> Password:</label>
                    <label > {password}</label>
                </div>
                <div>
                    <label> Password:</label>
                    <label > {cPassword}</label>
                </div>
            </form>
        </div>
    )
}

export default MyForm;