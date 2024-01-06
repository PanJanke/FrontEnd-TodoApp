import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginComponent() {

    const [username, setUsername] = useState('jano')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }


    function handleSubmit() {
        if (username === 'jano' && password === 'password') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className={"Login"}>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed.
                Please check your credentials.</div>}

            <div className={"LoginForm"}>
                <div>
                    <label>User Name</label>
                    <input type={"text"} name={"username"} value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type={"password"} name={"password"} value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type={"button"} name={"login"} onClick={handleSubmit}> Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent