import PropTypes from 'prop-types';
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import mainStyle from "app/pages/Main/assets/css/main.css";

const TextFieldGroup = ({field,value,label,type,onChange,error,required}) => {
    const errorClass = isEmpty(error)? "" : mainStyle["has-error"];
    return (
        <div class={mainStyle["reg-box"]}>
            <span class={mainStyle["reg-box__title"]}>{label}</span>
            <div class={mainStyle["reg-box__value"]+ ' ' + errorClass } >
                <input
                       required={required}
                       class={mainStyle["inputText"]}
                       type={type}
                       value={value}
                       onChange={onChange}
                       name={field}
                />
                {error && <span class={mainStyle["has-error__text"]}>{error}</span> }
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
    type:'text',
    required:false
}

export default TextFieldGroup;