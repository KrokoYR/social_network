export interface MESSAGES_OBJ {
	recipient_id: string,
	text: string
	timestamp: number
	send_by_me: boolean
}

// Describing the different ACTION NAMES available
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface DeleteMessageAction {
	type: typeof DELETE_MESSAGE;
	meta: {
		timestamp: number;
	};
}

export type MessageActionTypes = DeleteMessageAction;