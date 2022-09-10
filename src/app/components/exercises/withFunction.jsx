import React from "react";
import CardWrapper from "../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = Boolean(localStorage.getItem("auth"));
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        const isItem = localStorage.getItem("auth");

        if (isItem) {
            localStorage.removeItem("auth");
        }
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunction;
