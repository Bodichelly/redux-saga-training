import {SELECT_USER, FETCH_USERS} from './types'

const initialState = {
  users: [],
  selectedUserId: undefined
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
        return { ...state, users: action.payload }
    case SELECT_USER:
        return { ...state, selectedUserId: action.payload }
    default: return state
  }
}