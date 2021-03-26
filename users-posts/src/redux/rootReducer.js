import {combineReducers} from 'redux'
import {postsReducer} from './postsReducer'
import {usersReducer} from './usersReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  app: appReducer
})