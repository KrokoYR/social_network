import React from 'react';


let state = {
	posts: [
		{text: 'FirstPost', likesCounter: 21},
		{text: 'FirstPost1', likesCounter: 25},
		{text: 'FirstPost2', likesCounter: 3},
		{text: 'FirstPost3', likesCounter: 0},
		{text: 'FirstPost4', likesCounter: 12},
	],
	recipients: [
		{id: '1', name: 'Rec1'},
		{id: '2', name: 'Rec2'},
		{id: '3', name: 'Rec3'},
		{id: '4', name: 'Rec4'},
		{id: '5', name: 'Rec5'},
		{id: '6', name: 'Rec6'},
	],
	messages: [
		{user_id: '1', text: 'Hello'},
		{user_id: '2', text: 'Hello1'},
		{user_id: '3', text: 'Hello2'},
		{user_id: '4', text: 'Hello3'},
		{user_id: '5', text: 'Hello4'},
		{user_id: '6', text: 'Hello5'},
		{user_id: '7', text: 'Hello6'},
	],
	addPost: (postMessage: string) => {
		state.posts.push({
			text: postMessage,
			likesCounter: 0
		})
	},
	
}

export default state;