import {
	PostsActionTypes,
	PostsWallState,
	SEND_POST,
	UPDATE_NEW_POST_TEXT
} from "./types";
import {POST_TYPE} from "./Post/types";


const initialState: PostsWallState = {
	newPostText: "",
	posts: []
}

export function PostsWallReducer(
	state = initialState,
	action: PostsActionTypes
): PostsWallState {
	switch (action.type) {
		case SEND_POST: {
			const newPost: POST_TYPE = {
				text: state.newPostText,
				likes_counter: 12,
				timestamp: Date.now()
			}
			
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost]
			}
		}
		
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.payload
			}
		}
		
		default:
			return state;
	}
}