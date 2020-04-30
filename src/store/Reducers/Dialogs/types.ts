// Recipient's types and
export interface RECIPIENT_TYPE {
	id: string;
	name: string;
}

// Message's types and actions:
export interface MESSAGE_TYPE {
	user_id: string;
	text: string;
	timestamp: number
}

// Describing the different ACTION NAMES available:
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface DeleteMessageAction {
	type: typeof DELETE_MESSAGE
	meta: {
		timestamp: number
	}
}

// Dialog's types and actions:
export interface DialogsState {
	newMessage: string;
	messages: Array<MESSAGE_TYPE>;
}

// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

interface SendMessageAction {
	type: typeof SEND_MESSAGE;
	payload: string;
}

interface UpdateNewMessageTextAction {
	type: typeof UPDATE_NEW_MESSAGE_TEXT;
	payload: string
}

export type DialogsActionTypes = SendMessageAction | UpdateNewMessageTextAction | DeleteMessageAction