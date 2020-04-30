import {PostsWallState} from "../types";
import {DELETE_POST, PostActionTypes} from "./types";


const initialState: PostsWallState = {
	newPostText: '',
	posts: []
}

export function PostReducer(
	state= initialState,
	action: PostActionTypes
): PostsWallState {
	switch (action.type) {
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(
					post => post.timestamp !== action.meta.timestamp
				)
			}
		}
		
		default:
			return state;
	}
}