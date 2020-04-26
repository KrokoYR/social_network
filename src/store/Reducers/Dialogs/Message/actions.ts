import {DELETE_MESSAGE} from "./types";

export function deleteMessage(timestamp: number) {
	return {
		type: DELETE_MESSAGE,
		meta: {
			timestamp
		}
	};
}