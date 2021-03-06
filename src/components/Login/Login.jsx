import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name ={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name ={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name ={"remember"} component={"input"}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)
const Login = () => {
    const onSubmit = (formdata)=> {
        console.log(formdata)
    }
    return (<div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
    )
}
export  default Login