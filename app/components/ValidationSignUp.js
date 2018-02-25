import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
    let errors ={};

    if(isEmpty(data.email)){
        errors.email = 'Обязательное поле';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Неправильный Email';
    }
    if(isEmpty(data.password)){
        errors.password = 'Обязательное поле';
    }
    if(!Validator.isLength(data.password,{min:8,max:32})){
        errors.password = 'Длина пароля должна быть от 8 до 32 символов';
    }
    if(isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = 'Обязательное поле';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'Пароли должны совпадать';
        errors.password = 'Пароли должны совпадать';
    }

    return {
        errors,
        isValid: isEmpty(errors)

    };
}