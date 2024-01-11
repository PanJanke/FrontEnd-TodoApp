import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {retrieveHelloWorldBeanPathVariable} from "./api/HelloWorldApiService";
import {useAuth} from "./security/AuthContext";

function WelcomeComponent() {

    const {username} = useParams()

    const authContext  = useAuth()

    const [message,setMessage] = useState(null)

    function callHelloWorldRestApi() {
        retrieveHelloWorldBeanPathVariable('jano', 'Basic amFubzpkdW1teQ==')
            .then((response) => succesfulResponse(response))
            .catch((error)=>(errorResponse(error)))
            .finally(()=>console.log('cleanup'))
    }

    function succesfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(response) {
        console.log(response)

    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className={"btn btn-success"} onClick={callHelloWorldRestApi}>CallHelloWorld REST API</button>
            </div>
            <div className={
                "text-info"
            }>{message}</div>
        </div>
    )
}

export default WelcomeComponent