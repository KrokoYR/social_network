import {
	DialogState,
	SEND_MESSAGE,
	DialogActionTypes
} from "./types";

const initialState: DialogState = {
	messages: [
		{recipient_id: '1', text: 'Hello', timestamp: 0, send_by_me: false},
		{recipient_id: '2', text: 'Hello1', timestamp: 0, send_by_me: false},
		{recipient_id: '3', text: 'Hello2', timestamp: 0, send_by_me: false},
		{recipient_id: '4', text: 'Hello3', timestamp: 0, send_by_me: false},
		{recipient_id: '5', text: 'Hello4', timestamp: 0, send_by_me: false},
		{recipient_id: '6', text: 'Hello5', timestamp: 0, send_by_me: false},
		{recipient_id: '7', text: 'Hello6', timestamp: 0, send_by_me: false},
	]
};

export function dialogReducer(
	state = initialState,
	action: DialogActionTypes
): DialogState {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				messages: [...state.messages, action.payload]
			};
		default:
			return state;
	}
}