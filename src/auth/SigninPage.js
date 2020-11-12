import React, { Component } from 'react'

class SigninPage extends Component {
    state = {
    email:'',
    password:''
}

render() {
    return (
        <div class="row">
           <form class="col s6 ">
                <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix"></i>
                    <input id="icon_email" type="email" class="validate"/>
                    <label for="icon_email">Email</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix"></i>
                    <input id="icon_password" type="password" class="validate"/>
                    <label for="icon_password">Password</label>
                </div>
                </div>
            </form>
        </div>
    )
}
}
export default SigninPage;