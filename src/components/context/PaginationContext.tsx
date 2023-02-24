import React, { createContext, useReducer } from "react";

//Types and enum
type TPaginationState = {
  pageNumber: number;
  isButtonDisabled: boolean;
  isToggled: boolean;
};

enum TPaginationActionKind {
  SET_DECREMENT_PAGENUM = "SET_DECREMENT_PAGENUM",
  SET_INCREMENT_PAGENUM = "SET_INCREMENT_PAGENUM",
  SET_TOGGLE_PLAN_BTN = "SET_TOGGLE_PLAN_BTN",
}

type TPaginationAction = {
  type: TPaginationActionKind;
};

const initialState = {
  pageNumber: 1,
  isButtonDisabled: true,
  isToggled: false,
  isConfirmed: false,
};

const reducer = (state: TPaginationState, action: TPaginationAction) => {
  const { type } = action;

  switch (type) {
    case TPaginationActionKind.SET_DECREMENT_PAGENUM:
      if (state.pageNumber <= 2) {
        return {
          ...state,
          pageNumber: state.pageNumber - 1,
          isButtonDisabled: true,
        };
      } else if (state.pageNumber > 2) {
        return {
          ...state,
          pageNumber: state.pageNumber - 1,
          isButtonDisabled: false,
        };
      } else {
        return {
          ...state,
          isButtonDisabled: false,
        };
      }
    case TPaginationActionKind.SET_INCREMENT_PAGENUM:
      if (state.pageNumber === 4) {
        return {
          ...state,
          pageNumber: state.pageNumber,
          isConfirmed: true,
        };
      } else {
        return {
          ...state,
          isButtonDisabled: false,
          pageNumber: state.pageNumber + 1,
        };
      }
    case TPaginationActionKind.SET_TOGGLE_PLAN_BTN:
      return {
        ...state,
        isToggled: !state.isToggled,
      };

    default:
      return state;
  }
};
const PaginationContext = createContext({ initialState });

export const PaginationProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
