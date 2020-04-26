import {
	DELETE_MESSAGE,
	MessageActionTypes
} from "./types";

import { DialogState } from "../types";


const initialState: DialogState = {
	messages: []
};

export function messageReducer(
	state = initialState,
	action: MessageActionTypes
): DialogState {
	switch (action.type) {
		case DELETE_MESSAGE:
			return {
				messages: state.messages.filter(
					message => message.timestamp !== action.meta.timestamp
				)
			};
		default:
			return state;
	}
}