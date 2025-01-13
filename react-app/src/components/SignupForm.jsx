import { useState } from 'react'
import Parse from '../service/parse'

function SignupForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const user = new Parse.User()
            user.set('username', username)
            user.set('password', password)

            await user.signUp()
            setMessage(
                `Signup successful! ${username} look dashboard for entry`
            )
            setUsername('')
            setPassword('')
        } catch (error) {
            setMessage(`Error: ${error.message}`)
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSignup} className="form">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign Up</button>
                {message && (
                    <div
                        className={
                            message.includes('Error') ? 'error' : 'success'
                        }
                    >
                        {message}
                    </div>
                )}
            </form>
        </div>
    )
}

export default SignupForm
