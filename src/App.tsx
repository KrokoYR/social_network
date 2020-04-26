import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from 'react-router-dom';
import { MESSAGES_OBJ } from "./store/Reducers/Dialogs/Message/types";
import { RECIPIENT_OBJ } from "./store/Reducers/Dialogs/Recipient/types";
import { POST_OBJ } from './store/Reducers/Profile/PostsWall/Post/types';

export interface AppProps {
	state: {
		recipients: RECIPIENT_OBJ[],
		messages: MESSAGES_OBJ[],
		posts: POST_OBJ[],
		addPost: (newPost:string) => void
	}
}

const App = () => {
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
							<Profile posts={[]}/>}/>
					
					<Route path={'/dialogs'} render={
						(dialogsData) =>
							<Dialogs recipientData={[]}
							         messagesData={[]}/>
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
