import React from "react";
import {Form, Field} from 'react-final-form'
import {OnChange} from "react-final-form-listeners";
import {maxLengthCreator, required, composeValidators} from "../validators/validators";
import { FORM_ERROR } from 'final-form'


class Login extends React.Component {
    onSubmit = async values => {
        let promise = this.props.loginData(values.email, values.password, values.rememberMe)
        promise.then((response) => {
            if (!this.props.isAuth) {
                return {[FORM_ERROR]: "error"}
            }
        })
    }
    render() {

        return <div>
            <h1>Login</h1>
            <Form onSubmit={this.onSubmit}
                  initialValues={{rememberMe: false}}
                  render={({submitError, handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field name="email" validate={composeValidators(required, maxLengthCreator(30))}>
                                  {({input, meta}) => (
                                      <div>
                                          <div>Email:</div>
                                          <input {...input} type="text" placeholder="Email"/>
                                          {meta.error && meta.touched &&
                                              <span style={{color: "red"}}>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                              <OnChange name="email">
                                  {(value, previous) => {
                                      this.props.inputEmailUpdater(value)
                                  }}
                              </OnChange>
                          </div>
                          <div>

                              <Field name="password" validate={composeValidators(required, maxLengthCreator(20))}>
                                  {({input, meta}) => (
                                      <div>
                                          <div>Password:</div>
                                          <input {...input} type="text" placeholder="Password"/>
                                          {meta.error && meta.touched &&
                                              <span style={{color: "red"}}>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                              <OnChange name="password">
                                  {(value, previous) => {
                                      this.props.inputPasswordUpdater(value)
                                  }}
                              </OnChange>
                          </div>
                          <div>
                              <Field name={"rememberMe"}>
                                  {({input, meta}) => (
                                      <div>
                                          <input {...input} type={"checkbox"}/>
                                          <label>Remember me</label>
                                      </div>

                                  )}

                              </Field>
                          </div>
                          {console.log(submitError)}
                          <button type={"submit"}>Login</button>

                      </form>
                  )}
            />
        </div>
    }
}

export default Login