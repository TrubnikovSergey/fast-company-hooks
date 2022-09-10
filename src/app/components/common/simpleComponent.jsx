import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button type="button" onClick={onLogOut}>
            Выйти из системы
        </button>
    ) : (
        <button type="button" onClick={onLogin}>
            Войти
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func,
    isAuth: PropTypes.boolean
};

export default SimpleComponent;
