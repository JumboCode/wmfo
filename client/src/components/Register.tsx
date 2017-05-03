import * as React from 'react';
import { browserHistory } from 'react-router';

import { Message } from './Message';
import { ErrorState, FormComponent } from './Form';
import { FormContainer } from './FormContainer';
import { Styles } from '../utils/style';

interface InputState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    passwordLength: boolean;
    passwordMatch: boolean;
    emailError: boolean;
    firstNameError: boolean;
    lastNameError: boolean;
    emailTakenError: boolean;
}

export class Register extends FormComponent<{}, InputState> {
    //private readonly SUBMIT_ENDPOINT: string = 'api/user';
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            passwordLength: false,
            passwordMatch: false,
            emailError: false,
            firstNameError: false,
            lastNameError: false,
            emailTakenError: false
        };
    }

    private readonly errorStates: ErrorState<InputState>[] = [{
        field: 'passwordLength',
        condition: (state: InputState) => state.password.length < 6
    }, {
        field: 'emailError',
        condition: (state: InputState) => !/^.+@.+\.edu/.test(state.email)
    }, {
        field: 'firstNameError',
        condition: (state: InputState) => state.firstName.length === 0
    }, {
        field: 'lastNameError',
        condition: (state: InputState) => state.lastName.length === 0
    }, {
        field: 'passwordMatch',
        condition: (state: InputState) => state.password !== state.passwordConfirm
    }];

    async handleSubmit(event: Event) {
        event.preventDefault();
        if (await this.errorCheck(this.state, this.errorStates)) {
            return;
        }

        try {
            console.log('here');
            /*const response = await $.ajax({
                url: this.SUBMIT_ENDPOINT,
                method: 'post',
                dataType: 'json',
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password
                }
            });*/
            console.log('redir');
            browserHistory.push('/signIn');
        } catch (e) {
            if (e.responseJSON.error.message === 'email exists') {
                await this.updateStateAsync('emailTakenError', true);
            }
            else {
                console.log('err', e);
            }
        }
    }

    render() {
        return (
            <div>
                <div id="user">


                <FormContainer width='10%' header='Register'>
                    <form onKeyUp={this.handleKeyUp.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                        <div id="columnContainer" style={{
                                overflow: 'hidden'
                            }}>
                            <div id="leftColumn" style={{
                                //float: 'left',
                                //width: '50%'
                            }}>
                                <input placeholder="First Name"
                                    style={Styles.inputBoxStyle}
                                    id="firstName"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleChange.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={false}
                                    doShow={this.state.firstNameError}
                                    message='Must have a first name'/>

                                <br/>
                                <input placeholder="Last Name"
                                    style={Styles.inputBoxStyle}
                                    id="lastName"
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleChange.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={false}
                                    doShow={this.state.lastNameError}
                                    message='Must have a last name'/>

                                <br/>
                                <input placeholder="Email"
                                    style={Styles.inputBoxStyle}
                                    id="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={false}
                                    doShow={this.state.emailError}
                                    message='Please enter a valid .edu email'/>
                            </div>

                            <div id="rightColumn" style={{
                                //float: 'left',
                                //width: '50%'
                            }}>
                                <input placeholder="Password"
                                    style={Styles.inputBoxStyle}
                                    id="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={false}
                                    doShow={this.state.passwordLength}
                                    message='Password must be at least six characters'/>

                                <br/>
                                <input placeholder="Confirm password"
                                    style={Styles.inputBoxStyle}
                                    id="passwordConfirm"
                                    type="password"
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleChange.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={false}
                                    doShow={this.state.passwordMatch}
                                    message='Passwords must match'/>
                                <br/>
                                <br/>
                                <input style={Styles.buttonStyle.submitButton}
                                    type="button"
                                    value="Submit"
                                    onClick={this.handleSubmit.bind(this)}/>
                                <Message
                                    color={Styles.WHITE}
                                    reserveSpace={true}
                                    doShow={this.state.emailTakenError}
                                    message='Email already in use'/>
                            </div>
                        </div>
                    </form>
                </FormContainer>
                </div>
                <div id="studio">
                          
                               <img id="studio_pic" src="https://www.wmfo.org/wp-content/uploads/2017/02/WmfoStudioAMainBoardPano.2016.04.01.CC-By-EdwardBeuchert.Large_-1.jpg" alt="Studio"/>
                </div>
            </div>
        );
    }
}