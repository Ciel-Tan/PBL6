import "./login.css"
import "./util.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/iconic/css/material-design-iconic-font.min.css"

const Login = () => {
    return ( 
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-49">Login</span>

                    <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                    <span className="label-input100">Email or username</span>
                    <input className="input100" type="text" name="username" placeholder="Type your email or username" />
                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="pass" placeholder="Type your password" />
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                    </div>

                    <div className="text-right p-t-8 p-b-31">
                    <a href="#">Forgot password?</a>
                    </div>

                    <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button className="login100-form-btn">Login</button>
                    </div>
                    </div>

                    <div class="login-container">
                        <p class="sign-up-text">Don't have an account? <a href="#">Sign up</a></p>

                        <div class="divider">
                            <span class="line"></span>
                            <span class="or-text">Or continue with</span>
                            <span class="line"></span>
                        </div>

                        <div class="social-login">
                            <button class="social-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="icon" />
                                Sign in with Google
                            </button>
                            <button class="social-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="icon" />
                                Sign in with Facebook
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
    );
}
 
export default Login;