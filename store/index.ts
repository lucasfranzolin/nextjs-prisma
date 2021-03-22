import { createStore } from "easy-peasy"

import { model } from "./model"

export function initializeStore(initialState) {
  return createStore(model, initialState)
}
