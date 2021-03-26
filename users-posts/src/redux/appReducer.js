import {HIDE_LOADER, POSTS, SHOW_LOADER, SHOW_ERROR, HIDE_ERROR} from './types'

const initialState = {
  loadingPosts: true,
  loadingUsers: false,
  errorMessage: ""
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      if(action.payload===POSTS){
        return {...state, loadingPosts: true}
      }else{
        return {...state, loadingUsers: true}
      }
    case HIDE_LOADER:
      if(action.payload===POSTS){
        return {...state, loadingPosts: false}
      }else{
        return {...state, loadingUsers: false}
      }
    case SHOW_ERROR:
      console.log(state, {...state, errorMessage: action.payload});
      return {...state, errorMessage: action.payload}
    case HIDE_ERROR:
      return {...state, errorMessage: ""}
    default: return state
  }
}