import { useGoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log("Access Token:", tokenResponse.access_token);

            // Fetch user information from Google API
            const res = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + tokenResponse.access_token);
            const data = await res.json();
            
            // setUserInfo(data); // Save user info in state
            console.log("User Info:", data); // Logs name, email, etc.
        },
        onError: error => console.error("Login Failed:", error),
        flow: 'implicit', // or just remove it, default is token flow
    })

    return (  
        <button className="social-btn" onClick={() => login()} type="button">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="icon" />
            Sign in with Google
        </button>
    );
}
 
export default GoogleAuth;