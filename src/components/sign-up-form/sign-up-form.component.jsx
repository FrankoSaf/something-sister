import {useState} from "react";
import axios from "axios";

import { SignUpContainer } from "./sign-up-form.styles"

function SignUpForm() {
    const [message, setMessage] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const sendToBackend = () => {
        console.log(username, email, password)
        const data = {username, email, password}
        
        axios
            .post("/user/create", data) // .post(URL, dataToSend)
            .then(response => {
                console.log(response.data)
                setMessage(response.data)
            }) // response from backend
    }

    return (
            <SignUpContainer>
                <h2>Don't have an account?</h2>
                <span>Sign up here:</span>

                <br/>
                
                <form action="" id="sing-up-form">
                    
                    <label for="text">Username:  </label>
                    <input 
                        type="text" 
                        id="text" 
                        name="username" 
                        placeholder="Enter username" 
                        onChange={e => setUsername(e.target.value)
                    }/>
                    <br/>

                    <label for="email">E-Mail:  </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter email" 
                        onChange={e => setEmail(e.target.value)
                    }/>
                    <br/>

                    <label for="password">Password:  </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter password" 
                        onChange={e => setPassword(e.target.value)
                    }/>
                    <br/>
                </form>

                <button 
                    type="submit" 
                    form="sing-up-form"
                    value="Submit"
                    onClick={sendToBackend}
                >SIGN UP</button>

                <h4 style={{color:"red"}}>{message}</h4>

   </SignUpContainer>
    )
}

export default SignUpForm;