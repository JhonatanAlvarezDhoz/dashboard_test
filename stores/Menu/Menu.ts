import { create } from "zustand";

interface State {
  currentState: boolean;
  setCurrentState: (value: boolean) => void;
}

const useStateMenu = create<State>((set) => ({
  currentState: false,
  setCurrentState: (value: boolean) =>
    set((state: State) => ({ currentState: !state.currentState })),
}));

export { useStateMenu };
