import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // Redirect to the user's profile page or some other pagess
    } else {
      setLoginError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loginError && <p>{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;