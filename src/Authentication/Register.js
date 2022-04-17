import { useState } from "react";


export default function Register() {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [registerFormErr, setRegisterFormErr] = useState({
        nameErr: "",
        emailErr: "",
        usernameErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    });


    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.id]: e.target.value
        });
        if (e.target.id === "name") {
            setRegisterFormErr({
                ...registerFormErr,
                nameErr: e.target.value.length === 0 ? "Name is required" : null
            });
        }
        if (e.target.id === "email") {
            setRegisterFormErr({
                ...registerFormErr,
                emailErr: e.target.value.length === 0
                    ? "Email is required"
                    : !e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                        ? "Email is invalid"
                        : null,
            })
        }
        if (e.target.id === "username") {
            setRegisterFormErr({
                ...registerFormErr,
                usernameErr: e.target.value.length === 0
                ? "Username is required" :
                e.target.value.match(/^\S*$/) ? "" : "Username cannot contain spaces"
            })
        }
        if (e.target.id === "password") {
            setRegisterFormErr({
                ...registerFormErr,
                passwordErr: e.target.value.length === 0
                ? "Password is required" :
                e.target.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/) ? "" : "You must enter a strong password."
            })
        }
        if (e.target.id === "confirmPassword") {
            setRegisterFormErr({
                ...registerFormErr,
                confirmPasswordErr: e.target.value.length === 0
                ? "Confirm Password is required"
                : e.target.value !== registerForm.password ? "Passwords do not match" : ""
            })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(registerForm, null, 2));
        // console.log(registerForm);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Register Form</h2>
                    <div className="text-center mb-5 text-dark">Made with bootstrap</div>
                    <div className="card my-5">

                        <form className="card-body p-lg-5" style={{ backgroundColor: "#ebf2fa" }} onSubmit={handleSubmit}>


                            <div className="mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Name"
                                    name="name"
                                    value={registerForm.name}
                                    onChange={handleChange}
                                />
                                {registerFormErr.nameErr && <span className="usernamehelp text-danger form-text">{registerFormErr.nameErr}</span>}
                            </div>

                            <div className="mb-3">
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                    name="email"
                                    value={registerForm.email}
                                    onChange={handleChange}
                                />
                                {registerFormErr.emailErr &&
                                    <span className="usernamehelp text-danger form-text">
                                        {registerFormErr.emailErr}
                                    </span>}
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="emailHelp"
                                    placeholder="User Name"
                                    name="username"
                                    value={registerForm.username}
                                    onChange={handleChange}
                                />
                                {registerFormErr.usernameErr &&
                                    <span className="usernamehelp text-danger form-text">
                                        {registerFormErr.usernameErr}
                                    </span>}
                            </div>

                            <div className="mb-3">
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    aria-describedby="emailHelp"
                                    placeholder="Password"
                                    name="password"
                                    value={registerForm.password}
                                    onChange={handleChange}
                                />
                                {registerForm.password &&
                                    <span className="passwordhelp text-danger form-text">
                                        {registerFormErr.passwordErr}
                                    </span>}
                            </div>


                            <div className="mb-3">
                                <input type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={registerForm.confirmPassword}
                                    onChange={handleChange}
                                />
                                {registerForm.confirmPassword &&
                                    <span className="confirmpasswordhelp text-danger form-text">
                                        {registerFormErr.confirmPasswordErr}
                                    </span>}
                            </div>


                            <div className="text-center">
                                <button type="submit"
                                    style={{ backgroundColor: "#0e1c36", color: "#fff" }}
                                    className="btn btn-color px-5 mb-5 w-100">Register</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
