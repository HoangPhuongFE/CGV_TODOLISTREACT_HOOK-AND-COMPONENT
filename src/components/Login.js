import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    if(response.error) {
      // Implement more user-friendly error handling
      console.error('Login failed:', response.error); // Log error for debugging purposes
      // You could update the state here to show an error message within the UI
    } else {
      // Consider a more secure way to handle the access token
      sessionStorage.setItem('accessToken', response.accessToken); // As a temporary measure
      navigate('/');
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // Use an environment variable
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        // Add more props for customization and security
      />
    </div>
  );
}

export default Login;
