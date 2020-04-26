import {SEND_POST} from "./types";
import {POST_OBJ} from "./Post/types";

export function sendPost(newPost: POST_OBJ) {
	return {
		type: SEND_POST,
		payload: newPost
	}
}