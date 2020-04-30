import {POST_TYPE} from "./Post/types";

export interface PostsWallState {
	newPostText: string;
	posts: Array<POST_TYPE>
}

// Describing the different ACTION NAMES available:
export const SEND_POST = "SEND_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

interface SendPostAction {
	type: typeof SEND_POST
}

interface UpdateNewPostTextAction {
	type: typeof UPDATE_NEW_POST_TEXT,
	payload: string
}

export type PostsActionTypes = SendPostAction | UpdateNewPostTextAction