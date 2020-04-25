import {
	DELETE_MESSAGE,
	ChatActionTypes
} from "./types";

import {DialogState} from "../types";


const initialState: DialogState = {
	messages: []
};

export function chatReducer(
	state = initialState,
	action: ChatActionTypes
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