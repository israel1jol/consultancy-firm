import React from "react";

const Login = () => {
    const loginHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className="centered-div">
            <div className="auth-div">
                <form action="" method="post" onSubmit={(e) => loginHandler(e)}>
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control " autoFocus/>
                    </div>
                    <br />
                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control"/>
                    </div>
                    <br />
                    <input type="submit" value="Login" className="btn btn-success"/>
                </form>
            </div>
        </div>
        
    )
}

export default Login