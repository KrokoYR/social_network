import {MESSAGES_OBJ} from "./Message/types";


// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE";

export interface DialogState {
	messages: MESSAGES_OBJ[]
}

interface SendMessageAction {
	type: typeof SEND_MESSAGE;
	payload: MESSAGES_OBJ;
}

export type ChatActionTypes = SendMessageAction;