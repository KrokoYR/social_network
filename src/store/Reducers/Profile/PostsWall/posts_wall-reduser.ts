import {PostsWallsActionTypes, PostsWallState, SEND_POST} from './types'
import {act} from "react-dom/test-utils";

const initialState: PostsWallState = {
	posts: [
		{text: "Post1", timestamp: 1, likesCounter: 1},
		{text: "Post2", timestamp: 2, likesCounter: 2},
		{text: "Post3", timestamp: 3, likesCounter: 3},
		{text: "Post4", timestamp: 4, likesCounter: 4},
		{text: "Post5", timestamp: 5, likesCounter: 5},
		{text: "Post6", timestamp: 6, likesCounter: 6},
		{text: "Post7", timestamp: 7, likesCounter: 7},
	]
}

export function postsWallReducer(
	state = initialState,
	action: PostsWallsActionTypes):PostsWallState {
	switch (action.type) {
		case SEND_POST:
			return {
				posts: [...state.posts, action.payload]
			}
		default:
			return state;
	}
}