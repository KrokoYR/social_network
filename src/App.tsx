import React from 'react';
import './App.css';

import {connect} from "react-redux";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Types:


// Components:
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

// Containers:
import DialogsContainer from "./components/Dialogs/Dialogs-container";

// States:
import { AppState } from "./store";
import { DialogsState } from './store/Reducers/Dialogs/types';
import News from "./components/News/News";

export interface AppProps {
	dialogs: DialogsState
}

class App extends React.Component<AppProps> {
	
	state = {}
	
	render() {
		return (
			<BrowserRouter>
				<div className="app-wrapper">
					<Header/>
					<Navbar/>
					<div className={'app-wrapper-content'}>
						<Route path={'/'} render={() => <Redirect to={'/news'}/>}/>
						<Route path={'/profile'} render={() =><Profile posts={[]}/>}/>
						<Route path={'/dialogs'} render={() =><DialogsContainer />}/>
						<Route path={'/news'} render={() => <News/>}/>
						<Route/>
						<Route/>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state: AppState) => {
	return {
		dialogs: state.dialogs
	}
}

export default connect(
	mapStateToProps
)(App);
