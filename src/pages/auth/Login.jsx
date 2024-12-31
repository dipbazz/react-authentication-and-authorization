import React from 'react'

export default function Login() {
    const handleSubmit = (event) => {
        event?.preventDefault();
        const username = event?.target?.username?.value;
        const password = event?.target?.password?.value;
        console.log(username, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input name='username' required />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' name='password' required />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
