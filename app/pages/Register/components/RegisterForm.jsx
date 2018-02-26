import React from "react";
import RegFieldGroup from "app/components/RegFieldGroup";
import PropTypes from "prop-types";
import validateInput from "app/components/ValidationSignUp";
import {Redirect} from "react-router-dom";
import mainStyle from "app/pages/Main/assets/css/main.css";
import {connect} from "react-redux";
import Recaptcha from "app/components/Recaptcha";

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'asd@mail.ru',
            password: '12345678',
            passwordConfirmation: '12345678',
            country: 'Germany',
            errors: {},
            isCorrectLoading: true,
            isRedirect: false,
            serverError: "",
            isRecaptch: false,
            countries: props.countries
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.verifyCallbackRecaptch = this.verifyCallbackRecaptch.bind(this);
        this.callbackRecaptch = this.callbackRecaptch.bind(this);
        this.injectCountries = this.injectCountries.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    injectCountries() {
        let data = [];
        this.state.countries.forEach(function (code) {
            data.push({
                value: this.state.country[code].name,
                label: this.state.country[code].name
            });
        });
        return data;
    }

    handleChange(event) {
        console.log(event);
    }

    // fixStyles(dom) {
    //     $(dom)
    //         .removeAttr("class")
    //         .attr("class",
    //             mainStyle["btn-group"] + " " +
    //             mainStyle["bootstrap-select"]
    //         );
    //
    //     $(dom).children(":nth-child(1)")
    //         .removeAttr("class")
    //         .attr("class",
    //             mainStyle.btn + " " +
    //             mainStyle["dropdown-toggle"] + " " +
    //             mainStyle["dropdown-toggle"] + " " +
    //             mainStyle["bs-placeholder"] + " " +
    //             mainStyle["btn-default"]
    //         );
    //     $(dom).children(":nth-child(1)")
    //         .children("span")
    //         .first()
    //         .removeAttr("class")
    //         .attr("class",
    //             mainStyle["filter-option"] + " " +
    //             mainStyle["pull-left"] + " "
    //         );
    //
    //     $(dom).children(":nth-child(1)")
    //         .children("span")
    //         .last()
    //         .removeAttr("class")
    //         .attr("class",
    //             mainStyle["bs-caret"]
    //         )
    //         .child()
    //         .removeAttr("caret")
    //         .attr("class",mainStyle["caret"]);
    //
    //     $(dom).children(":nth-child(2)")
    //         .removeAttr("class")
    //         .attr("class",
    //             mainStyle["dropdown-menu"] + " " +
    //             mainStyle["open"]
    //         )
    //         .first()
    //         .removeAttr("class")
    //         .attr("class");
    //
    //
    // }

    isValid() {
        const {errors, isValid} = validateInput((this.state));
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    returnJson() {
        return {
            "jsonrpc": "2.0",
            "id": 4564,
            "result": []
        };
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid() && this.state.isRecaptch) {
            this.setState({isCorrectLoading: false});
            //MOVE OUT TO ACTION
            this.props.signup(this.state)().then(response => {
                    if (response.status === 200) {
                        if (response.data.error !== undefined) {
                            if (response.data.error.message !== undefined) {
                                this.setState({serverError: response.data.error.message});
                                if (response.data.error.validation_errors !== undefined) {
                                    this.setState({errors: response.data.error.validation_errors});
                                }
                            }
                        }
                        if (response.data.result !== undefined) {
                            this.setState({isRedirect: true});
                        } else {
                            this.setState({isRedirect: false});
                        }
                    }
                    this.setState({isCorrectLoading: true});
                }
            );
        } else {
            this.setState({serverError: 'Заполните все поля корректно!'});
        }
    }
    verifyCallbackRecaptch(response) {
        this.setState({isRecaptch: true});
        console.log('hello from recaptch');

    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to='/register-success'/>;
        }
        const {errors} = this.state;
        return (
            <div>
                <form className={mainStyle["form"]} onSubmit={this.onSubmit}>

                    <RegFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange}
                                   type="email" error={errors.email}/>

                    <div className={mainStyle["reg-box"]}>
                        <span className={mainStyle["reg-box__title"]}>Страна</span>
                        <div className={mainStyle["reg-box__value"]}>
                            <div className={mainStyle["select"]}>
                                <div className={mainStyle["btn-group"] + " " + mainStyle["bootstrap-select"]}>
                                    <button type="button"
                                            className={
                                                mainStyle["btn"] + " " + mainStyle["dropdown-toggle"] + " " + mainStyle["btn-default"]}
                                            data-toggle="dropdown"
                                            role="button" title="China">
                                        <span
                                            className={mainStyle["filter-option"] + " " + mainStyle["pull-left"]}>
                                            Китай</span>
                                        &nbsp;
                                        <span className={mainStyle["bs-caret"]}>
                                            <span className={mainStyle.caret}/>
                                        </span>
                                    </button>
                                    <div className={mainStyle["dropdown-menu"] + " " + mainStyle["open"]}
                                         role="combobox">
                                        <ul className={mainStyle["dropdown-menu"] + mainStyle["inner"]} role="listbox"
                                            aria-expanded="false">
                                            <li data-original-index="0" className="selected">
                                                <a tabIndex="0"
                                                   className=""
                                                   data-tokens="null"
                                                   role="option"
                                                   aria-disabled="false"
                                                   aria-selected="true"><span
                                                    className="text">China</span><span
                                                    className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                            <li data-original-index="1"><a tabIndex="0" className="" data-tokens="null"
                                                                           role="option" aria-disabled="false"
                                                                           aria-selected="false"><span className="text">Japan</span><span
                                                className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                            <li data-original-index="2"><a tabIndex="0" className="" data-tokens="null"
                                                                           role="option" aria-disabled="false"
                                                                           aria-selected="false"><span className="text">Poland</span><span
                                                className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                            <li data-original-index="3"><a tabIndex="0" className="" data-tokens="null"
                                                                           role="option" aria-disabled="false"
                                                                           aria-selected="false"><span className="text">Germany</span><span
                                                className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                            <li data-original-index="4"><a tabIndex="0" className="" data-tokens="null"
                                                                           role="option" aria-disabled="false"
                                                                           aria-selected="false"><span className="text">France</span><span
                                                className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                            <li data-original-index="5"><a tabIndex="0" className="" data-tokens="null"
                                                                           role="option" aria-disabled="false"
                                                                           aria-selected="false"><span className="text">Brazil</span><span
                                                className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                        </ul>
                                    </div>
                                    {/*<select className="selectpicker" tabIndex="-98">*/}
                                        {/*<option>China</option>*/}
                                        {/*<option>Japan</option>*/}
                                        {/*<option>Polan</option>*/}
                                        {/*<option>France</option>*/}
                                        {/*<option>France</option>*/}
                                        {/*<option>Brazil</option>*/}
                                        {/*<option>Germany</option>*/}
                                    {/*</select>*/}
                                </div>
                            </div>

                        </div>
                    </div>

                    <RegFieldGroup field="password" value={this.state.password} label={"Пароль"}
                                   onChange={this.onChange} type="password" error={errors.password}/>

                    <RegFieldGroup field="passwordConfirmation" value={this.state.passwordConfirmation}
                                   label={"Повторить пароль"} onChange={this.onChange} type="password"
                                   error={errors.passwordConfirmation}/>

                    <div className={mainStyle["reg-box"]}>

                        <Recaptcha
                            ref={ ref => this.recaptcha = ref }
                            sitekey={'6LfCYUgUAAAAAK6pX0xWrAnKi0VJIrxT92b1UqyK'}
                            onResolved={this.verifyCallbackRecaptch } />

                    </div>

                    <div className={mainStyle["reg-box"]}>
                        <p>{this.state.serverError}</p>
                        <input className={mainStyle["button"] + ' ' + mainStyle["button--orangeBig"]} type="submit"
                               value="Зарегистрироваться" disabled={!this.state.isCorrectLoading}/>

                    </div>

                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    signup: PropTypes.func.isRequired
};

export default RegisterForm;