export interface POST_TYPE {
	text: string;
	likes_counter: number;
	timestamp: number;
	img_url?: string;
	video_url?: string;
}

// Describing the different ACTION NAMES available:
export const DELETE_POST = "DELETE_POST";

interface DeletePostAction {
	type: typeof DELETE_POST
	meta: {
		timestamp: number
	}
}

export type PostActionTypes = DeletePostAction;