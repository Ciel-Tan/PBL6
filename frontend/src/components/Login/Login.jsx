import "./login.css"
import "./util.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/iconic/css/material-design-iconic-font.min.css"

import { useLoginFormik } from "../validate/Formik"


const Login = () => {
    const formik = useLoginFormik()

    return ( 
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
                    <span className="login100-form-title p-b-49">Login</span>

                    <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                        <span className="label-input100">Email or username</span>
                        <input 
                            className="input100" 
                            type="text" 
                            id="username"
                            name="username"
                            onChange={formik.handleChange}
                            placeholder="Type your email or username"
                            autoComplete="username"
                        />
                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                    </div>

                    {formik.errors.username && (
                        <p className="errorMsg">{formik.errors.username}</p>
                    )}

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <span className="label-input100">Password</span>
                        <input 
                            className="input100" 
                            type="password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            placeholder="Type your password"
                            autoComplete="current-password"
                        />
                        <span className="focus-input100" data-symbol="&#xf190;"></span>
                    </div>

                    {formik.errors.password && (
                        <p className="errorMsg">{formik.errors.password}</p>
                    )}

                    <div className="text-right p-t-8 p-b-31">
                        <a href="/forgotPassword">Forgot password?</a>
                    </div>

                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>
                            <button className="login100-form-btn" type="submit">Login</button>
                        </div>
                    </div>

                    <div className="login-container">
                        <p className="sign-up-text">Don't have an account? <a href="/signup">Sign up</a></p>

                        <div className="divider">
                            <span className="line"></span>
                            <span className="or-text">Or continue with</span>
                            <span className="line"></span>
                        </div>

                        <div className="social-login">
                            <button className="social-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="icon" />
                                Sign in with Google
                            </button>
                            <button className="social-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="icon" />
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