import {PostsActionTypes, SEND_POST, UPDATE_NEW_POST_TEXT} from "./types";

export function SendPostTextAction(): PostsActionTypes {
	return {
		type: SEND_POST
	}
}

export function UpdateNewPostTextAction(text: string): PostsActionTypes {
	return {
		type: UPDATE_NEW_POST_TEXT,
		payload: text
	}
}