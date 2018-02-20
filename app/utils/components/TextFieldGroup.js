import PropTypes from 'prop-types';
import React from 'react';
import isEmpty from 'lodash/isEmpty';

const TextFieldGroup = ({field,value,label,type,onChange,error}) => {
    const errorClass = isEmpty(error)? "" : "has-error";
    return (
        <div class="reg-box">
            <span class="reg-box__title">{label}</span>
            <div class={"reg-box__value " + errorClass } >
                <input
                       class="inputText"
                       type={type}
                       value={value}
                       onChange={onChange}
                       name={field}
                />
                {error && <span class="has-error__text">{error}</span> }
            </div>

        </div>
    );
}

TextFieldGroup.propTypes={
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type:'text'
}

export default TextFieldGroup;