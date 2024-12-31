import React from 'react'

export default function Register() {
    const handleSubmit = (event) => {
        event?.preventDefault();
        const fullName = event?.target?.full_name?.value;
        const username = event?.target?.username?.value;
        const password = event?.target?.password?.value;
        console.log(fullName, username, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Full name</p>
                    <input name='full_name' required />
                </label>
                <label>
                    <p>Username</p>
                    <input name='username' required />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' name='password' required />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
