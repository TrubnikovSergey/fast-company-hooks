import React, { useRef, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) => {
            console.log("setOtherState =", otherState);
            return prevState === "false" ? "true" : "false";
        });
    };
    useEffect(() => {
        prevState.current = otherState;
        console.log("useEffect otherState =", otherState);
        console.log("useEffect prevState.current =", prevState.current);
    }, [otherState]);

    // console.log("return otherState =", otherState);
    // console.log("return prevState.current =", prevState.current);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev State:{prevState.current}</p>
            <p>Current State:{otherState}</p>
            <p>Log:{console.log("JSX otherState =", otherState)}</p>
            <p>
                Log:
                {console.log("JSX prevState.current =", prevState.current)}
            </p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
