import {DialogsActionTypes, SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT, DELETE_MESSAGE} from "./types";

export function deleteMessageAction(timestamp: number): DialogsActionTypes {
	return {
		type: DELETE_MESSAGE,
		meta: {
			timestamp: timestamp
		}
	}
};

export function sendMessageTextAction(user_id: string): DialogsActionTypes {
	return {
		type: SEND_MESSAGE,
		payload: user_id
	}
}

export function updateNewTextMessageAction(text: string): DialogsActionTypes {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		payload: text
	}
}