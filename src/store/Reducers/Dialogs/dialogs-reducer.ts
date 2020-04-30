import {
	DialogsActionTypes,
	DialogsState,
	SEND_MESSAGE,
	UPDATE_NEW_MESSAGE_TEXT,
	DELETE_MESSAGE,
	MESSAGE_TYPE
} from "./types";

export const initialState: DialogsState = {
	newMessage: '',
	messages: [
		{user_id: "1", timestamp: 100, text: "HI"},
		{user_id: "1", timestamp: 101, text: "HI"},
		{user_id: "1", timestamp: 102, text: "HI"},
		{user_id: "1", timestamp: 103, text: "HI"},
		{user_id: "1", timestamp: 104, text: "HI"},
	]
}

export function DialogsReducer(
	state = initialState,
	action: DialogsActionTypes
): DialogsState {
	switch (action.type) {
		case SEND_MESSAGE: {
			const newMessage: MESSAGE_TYPE = {
				user_id: action.payload,
				text: state.newMessage,
				timestamp: Date.now()
			}
			
			return {
				...state,
				newMessage: '',
				messages: [...state.messages, newMessage]
			};
		}
		
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessage: action.payload
			}
		}
		
		case DELETE_MESSAGE: {
			return {
				...state,
				messages: state.messages.filter(
					message => message.timestamp !== action.meta.timestamp
				)
			}
		}
		
		default:
			return state;
	}
}