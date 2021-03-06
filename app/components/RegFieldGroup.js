import PropTypes from 'prop-types';
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import mainStyle from "app/pages/Main/assets/css/main.css";

const RegFieldGroup = ({field, value, label, type, onChange, error, required}) => {
    const errorClass = isEmpty(error) ? "" : mainStyle["has-error"];
    return (
        <div className={mainStyle["reg-box"]}>
            <span className={mainStyle["reg-box__title"]}>{label}</span>
            <div className={mainStyle["reg-box__value"] + ' ' + errorClass}>
                <input
                    required={required}
                    className={mainStyle["inputText"]}
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={field}
                />
                {error && <span className={mainStyle["has-error__text"]}>{error}</span>}
            </div>

        </div>
    );
};

RegFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

RegFieldGroup.defaultProps = {
    type: 'text',
    required: false
};

export default RegFieldGroup;