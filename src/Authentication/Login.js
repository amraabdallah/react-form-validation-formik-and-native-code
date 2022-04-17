import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is Required'),
            password: Yup.string()
                .required('Password is Required.')
                .min(6, 'Password is too short - should be 6 chars minimum.')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Login Form</h2>
                    <div className="text-center mb-5 text-dark">Made with bootstrap</div>
                    <div className="card my-5">

                        <form className="card-body cardbody-color p-lg-5" onSubmit={formik.handleSubmit} style={{ backgroundColor: "#ebf2fa" }}>

                            <div className="text-center">
                                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid img-thumbnail rounded-circle my-3"
                                    width="200px" alt="profile" />
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                    {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                            </div>
                            <div className="mb-3">
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                    {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                            </div>
                            <div className="text-center">
                                <button type="submit"
                                    style={{ backgroundColor: "#0e1c36", color: "#fff" }}
                                    className="btn btn-color px-5 mb-5 w-100">Login
                                </button>
                            </div>
                            <div id="emailHelp"
                                className="form-text text-center mb-5 text-dark">
                                Not Registered?
                                <a href="#"
                                    className="text-dark fw-bold"
                                    style={{ textDecoration: "none" }}> Create an Account</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
