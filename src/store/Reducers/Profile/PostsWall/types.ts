import {POST_OBJ} from "./Post/types";

// Describing the different ACTION NAMES available
export const SEND_POST = "SEND_POST";

export interface PostsWallState {
	posts: POST_OBJ[]
}

interface SendMessagePost {
	type: typeof SEND_POST;
	payload: POST_OBJ;
}

export type PostsWallsActionTypes = SendMessagePost;