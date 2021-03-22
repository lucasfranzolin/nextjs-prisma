import { Action, action } from "easy-peasy"
import { User } from "@prisma/client"

export interface StoreModel {
  users: User[]
  setUsers: Action<StoreModel, User[]>
}

export const initialState = {
  users: [],
}

export const model: StoreModel = {
  ...initialState,
  setUsers: action((state, payload) => {
    state.users = payload
  }),
}
