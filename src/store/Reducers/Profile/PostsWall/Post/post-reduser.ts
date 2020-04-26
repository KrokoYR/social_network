import {DELETE_POST, PostActionTypes} from "./types";

import {PostsWallState} from "../types";

const initialState: PostsWallState = {
	posts: []
}

export function postReducer(
	state = initialState,
	action: PostActionTypes):PostsWallState {
	switch (action.type) {
		case DELETE_POST:
			return {
				posts: state.posts.filter(post => post.timestamp !== action.meta.timestamp)
			}
		default:
			return state;
	}
}
