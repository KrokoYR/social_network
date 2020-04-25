import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RECIPIENT_OBJ} from "./components/Dialogs/recipient/Recipient";
import {POST_OBJ} from "./components/Profile/MyPosts/Post/Post";
import {MESSAGES_OBJ} from "./redux/Reducers/Dialogs/Message/types";

export interface AppProps {
	state: {
		recipients: RECIPIENT_OBJ[],
		messages: MESSAGES_OBJ[],
		posts: POST_OBJ[],
		addPost: (newPost:string) => void
	}
}

const App:FC<AppProps> = ({state}) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Navbar/>
				<div className={'app-wrapper-content'}>
					{/*<Route path={'/profile'} component={Profile}/>*/}
					{/*<Route path={'/dialogs'} component={Dialogs}/>*/}
					<Route path={'/profile'} render={
						(profileData) =>
							<Profile posts={state.posts} addPost={state.addPost}/>}/>
					
					<Route path={'/dialogs'} render={
						(dialogsData) =>
							<Dialogs recipientData={state.recipients}
							         messagesData={state.messages}/>
						}/>
					<Route/>
					<Route/>
					<Route/>
				</div>
				{/*<Profile/>*/}
			</div>
		</BrowserRouter>
	);
}

export default App;
