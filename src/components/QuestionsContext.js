import React, { useReducer } from "react";

let reducer = (state, action) => {
    switch (action.type) {
        case false:
            return { ...state, gotActivated: state.gotActivated = "false" };
        case true:
            return { ...state, gotActivated: state.gotActivated = "true" };
        default:
            return;
    }

};

const initialState = { gotActivated: "false" };
const QuestionContext = React.createContext(initialState);

function QuestionProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <QuestionContext.Provider value={{ state, dispatch }}>
            {props.children}
        </QuestionContext.Provider>
    );
}
export { QuestionContext, QuestionProvider };