import React from "react";

export const ACTION_TYPES = {
  SET_RESUME: "SET_RESUME",
};

const initialState = {
  resume: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESUME:
      return {
        resume: {
          ...state.resume,
          ...action.resume,
        },
      };
    default:
      return state;
  }
};

export const ResumeContext = React.createContext({
  resume: {},
  setResume: () => {},
});

export const ResumeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    resume: state.resume,
    setResume: (resume) => {
      dispatch({ type: ACTION_TYPES.SET_RESUME, resume });
    },
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
