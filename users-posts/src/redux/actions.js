import {
    SELECT_USER,
    FETCH_POSTS,
    FETCH_USERS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    HIDE_ERROR,
    REQUEST_POSTS,
    REQUEST_USERS
} from './types'




export function showLoader(entity) {
    return {
        type: SHOW_LOADER,
        payload: entity
    }
}

export function hideLoader(entity) {
    return {
        type: HIDE_LOADER,
        payload: entity
    }
}

export function showErrorMessage(message) {
    return {
        type: SHOW_ERROR,
        payload: message
    }
}

export function hideErrorMessage() {
    return {
        type: HIDE_ERROR
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}


export function fetchUsers() {
    return {
        type: REQUEST_USERS
    }
}


export function selectUser(id) {
    return {
        type: SELECT_USER,
        payload: id
    }
}