import {DELETE_POST} from "./types";

export function deletePostMessage(timestamp: number) {
	return {
		type: DELETE_POST,
		meta: {
			timestamp: timestamp
		}
	}
}