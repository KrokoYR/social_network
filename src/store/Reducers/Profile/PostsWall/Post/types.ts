export interface POST_OBJ {
	/** Text for post message */
	text: string
	/** List counter: */
	likesCounter: number
	/** Image url */
	img?: string
	/** Timestamp */
	timestamp: number
}

// Describing the different ACTION NAMES available
export const DELETE_POST = "DELETE_POST";

interface DeletePostAction {
	type: typeof DELETE_POST;
	meta: {
		timestamp: number;
	};
}

export type PostActionTypes = DeletePostAction;