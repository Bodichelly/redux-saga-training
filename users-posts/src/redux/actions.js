import {
    SELECT_USER,
    FETCH_POSTS,
    FETCH_USERS,
    SHOW_LOADER,
    HIDE_LOADER
} from './types'




export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}


export function fetchPosts() {
    return {
        type: FETCH_POSTS
    }
}


export function fetchUsers() {
    return {
        type: FETCH_USERS
    }
}


export function selectUser(id) {
    return {
        type: SELECT_USER,
        payload: id
    }
}