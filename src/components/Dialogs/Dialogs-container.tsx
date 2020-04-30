import React, { Dispatch } from "react";
import { connect } from "react-redux";

// Components
import Dialogs from "./Dialogs";

// Action Types:
import {
	DialogsActionTypes
} from "../../store/Reducers/Dialogs/types";

// Actions:
import { sendMessageTextAction, updateNewTextMessageAction } from "../../store/Reducers/Dialogs/actions";

// State:
import { AppState } from "../../store";


export type UpdateNewMessage = React.SyntheticEvent<{ value: string }>;

const mapStateToProps = (state: AppState) => {
	return {
		newMessage: state.dialogs.newMessage,
		messages: state.dialogs.messages
	}
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsActionTypes>) => {
	return {
		sendMessage: (user_id:string) => dispatch(sendMessageTextAction(user_id)),
		updateNewMessageText: (text:string) => dispatch(updateNewTextMessageAction(text))
	}
}

const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dialogs);

export default DialogsContainer;