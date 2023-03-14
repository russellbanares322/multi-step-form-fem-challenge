import React, { createContext, useReducer } from "react";

//Types and enum
export type TPaginationState = {
  pageNumber: number;
  isButtonDisabled: boolean;
  isToggled: boolean;
  isConfirmed: boolean;
};

export enum EPaginationActionKind {
  SET_DECREMENT_PAGENUM = "SET_DECREMENT_PAGENUM",
  SET_INCREMENT_PAGENUM = "SET_INCREMENT_PAGENUM",
  SET_TOGGLE_PLAN_BTN = "SET_TOGGLE_PLAN_BTN",
}

export type TPaginationAction = {
  type: EPaginationActionKind;
};

export type TState = {
  initialState: object;
};
const initialState = {
  pageNumber: 1,
  isButtonDisabled: true,
  isToggled: false,
  isConfirmed: false,
};

const reducer = (
  state: TPaginationState,
  action: TPaginationAction
): TPaginationState => {
  const { type } = action;

  switch (type) {
    case EPaginationActionKind.SET_DECREMENT_PAGENUM:
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
    case EPaginationActionKind.SET_INCREMENT_PAGENUM:
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
    case EPaginationActionKind.SET_TOGGLE_PLAN_BTN:
      return {
        ...state,
        isToggled: !state.isToggled,
      };

    default:
      return state;
  }
};
const PaginationContext = createContext({ initialState });

export const PaginationProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
