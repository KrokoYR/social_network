import {Dispatch} from 'react';

// Component:
import Message from "./Message";
import {connect} from "react-redux";

// State:
import {AppState} from "../../../store";

// Action Types:
import {DialogsActionTypes} from "../../../store/Reducers/Dialogs/types";

// Actions:
import {deleteMessageAction} from "../../../store/Reducers/Dialogs/actions";

const mapStateToProps = (state: AppState) => {
	return {
		newMessage: state.dialogs.newMessage,
		messages: state.dialogs.messages
	}
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsActionTypes>) => {
	return {
		deleteMessage: (timestamp: number) => dispatch(deleteMessageAction(timestamp))
	}
}
const MessageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Message);

export default MessageContainer;