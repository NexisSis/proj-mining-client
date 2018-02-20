import PropTypes from 'prop-types';
import React from 'react';

const TextFieldGroup = ({field,value,label,type,onChange,error}) => {
    return (
        <div class="reg-box">
            <span class="reg-box__title">{label}</span>
            <div class="reg-box__value">
                <input
                       class="inputText"
                       type={type}
                       value={value}
                       onChange={onChange}
                       name={field}
                />
                {error && <span className="help-block">{error}</span> }
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