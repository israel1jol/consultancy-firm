import React from "react";

const Register = () => {
    const registerHandler = (e) => {
        e.preventDefault();
    }
    return(
        <>
        <br />
        <br />
        <div className="centered-div">
            <div className="auth-div">
                <form action="" method="post" onSubmit={(e) => registerHandler(e)}>
                    <div>
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" name="full-name" id="full-name" className="form-control " autoFocus/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="re-password">Confirm Password</label>
                        <input type="password" name="re-password" id="re-password" className="form-control"/>
                    </div>
                    <br />
                    <input type="submit" value="Register" className="btn btn-success"/>
                </form>
            </div>
        </div>
        </>
        
    )
}

export default Register