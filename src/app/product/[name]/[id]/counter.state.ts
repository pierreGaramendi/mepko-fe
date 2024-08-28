export type IshopCounterState = {
  count: number;
};

export type IshopCounterAction = { type: "increment" } | { type: "decrement" };

export const shopCounterInitialState: IshopCounterState = { count: 1 };

export const shopCounterReducer = (state: IshopCounterState, action: IshopCounterAction, maxCount: number): IshopCounterState => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count < maxCount ? state.count + 1 : state.count,
      };
    case "decrement":
      return {
        ...state,
        count: state.count > 1 ? state.count - 1 : state.count,
      };
    default:
      return state;
  }
};
