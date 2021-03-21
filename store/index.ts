import { createStore, action, Store } from "easy-peasy"

export interface InitialStateModel {
  count: Number
}

export const initialState: InitialStateModel = {
  count: 0
}

export interface StoreModel extends InitialStateModel {}

const model = {
  ...initialState,
  // increment: action((state) => {
  //   state.count++
  // }),
  // decrement: action((state) => {
  //   state.count--
  // }),
  // reset: action((state) => {
  //   state.count = 0
  // }),
}

export default model

export function initializeStore(initialState) {
  return createStore(model, initialState)
}
