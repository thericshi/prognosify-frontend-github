import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email, password };

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setError(null);
                    localStorage.setItem('token', data.token);
                    console.log(data.token)
                    // props.history.push('/');
                }
            })
            .catch(error => {
                console.log("Error found:")
                console.log(error);
            });
    }

    return (
        <div className='bg-gray-200 p-6 items-center'>

        <div className="bg-indigo-200 rounded-lg py-5 mx-auto max-w-6xl">
          <p className="text-center font-medium text-black">Note: Account creation is currently under development. Upon completion, your profile and prediction history can be saved for future progress tracking.</p>
        </div>

        <div className="bg-gray-200 flex justify-center items-center mt-8 mb-20">

            <form className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2" onSubmit={handleSubmit}>
                <h2 className="text-lg font-medium mb-4">Log in</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg">Sign In</button>
                <p className="text-red-500 text-xs italic mt-4">{error}</p>
            </form>
        </div>

        </div>
        
    );
}

export default Login;
