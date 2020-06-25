import React , {useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signin = () =>{
	const history = useHistory()
	const [password,setPassword] = useState("")
	const [email,setEmail] = useState("")

	const PostData = () =>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			 M.toast({html: "Invalid Email" , classes : "#ad1457 pink darken-3"})
			 return;
		}
		fetch('/signin' , {
			method : "post",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				password : password,
				email : email
			})
		}).then(res=>res.json()).then(data=>{
			console.log(data);
			if(data.error){
				M.toast({html: data.error , classes : "#ad1457 pink darken-3"})
			}
			else{
				M.toast({html: "Signedin success"  , classes : "#43a047 green darken-1"})
				history.push('/')
			}
		}).catch((err)=>{
			console.log(err);
		})
	}
	return(
		<div className="mycard">
			<div className="card auth-card input-field">
		        <h2>Instagram</h2>
		        <input type="text" placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
		        <input type="text" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
		        <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()}>
		        	Login
				</button>
				<h5>
					<Link to="/signup">Don't have an account?</Link>
				</h5>
	      </div>
		</div>
		);
}

export default Signin;

