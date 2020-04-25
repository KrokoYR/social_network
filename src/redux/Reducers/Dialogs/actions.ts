import {SEND_MESSAGE} from "./types";
import { MESSAGES_OBJ } from "./Message/types";

export function sendMessage(newMessage: MESSAGES_OBJ) {
	return {
		type: SEND_MESSAGE,
		payload: newMessage
	};
}