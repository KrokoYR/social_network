import { DELETE_POST } from "./types";

export function deletePost(timestamp: number) {
	return {
		type: DELETE_POST,
		meta: {
			timestamp
		}
	};
}