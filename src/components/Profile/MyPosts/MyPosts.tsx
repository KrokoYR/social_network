import React, {FC, TextareaHTMLAttributes} from "react";
import styles from './MyPosts.module.css';
import Post, {POST_OBJ} from "./Post/Post";

export interface MyPostsElem {
	posts: POST_OBJ[],
	addPost: (newPost:string) => void
}

const MyPosts:FC<MyPostsElem> = ({posts,addPost}) => {
	let newPostElement = React.createRef<HTMLTextAreaElement>();
	
	let postsElements = posts
		.map(post => <Post text={post.text} likesCounter={post.likesCounter}/>)
	
	let addNewPost = () => {
		let text = newPostElement.current?.value
		if (text) {
			addPost(text);
		}
	}
	
	return (
		<div className={styles.myPosts}>
			<h3>My post</h3>
			<div>
				<textarea ref={newPostElement}></textarea>
				<div>
					<button onClick={addNewPost}>Add post</button>
				</div>
			</div>
		    <div className={styles.posts}>
			    {postsElements}
            </div>
		</div>
	)
}

export default MyPosts;