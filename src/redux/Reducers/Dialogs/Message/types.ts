export interface MESSAGES_OBJ {
	user_id: string,
	text: string
	timestamp: number
}

// Describing the different ACTION NAMES available
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface DeleteMessageAction {
	type: typeof DELETE_MESSAGE;
	meta: {
		timestamp: number;
	};
}

export type ChatActionTypes = DeleteMessageAction;