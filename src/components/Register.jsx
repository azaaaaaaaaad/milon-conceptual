import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const Register = () => {

    const { registerUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

        if (password.length < 6) {
            setError("password must be 6 characters")
            return
        }
        if (password !== confirmPassword) {
            setError('password did not matched')
            return
        }
        if (!/\d{2,}$/.test(password)) {
           setError("password must end with at least 2 numbers") 
           return
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setError("password must contain at least 1 special character")
            return
        }
        setError('')

        registerUser(email, password)
        .then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="user name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            {
                                error && <small className=" text-red-700">{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? Please <Link to={'/login'}>
                                <button className="btn btn-outline btn-success">Login</button>
                            </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;