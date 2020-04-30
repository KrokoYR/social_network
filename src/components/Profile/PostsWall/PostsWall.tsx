import React, {FC} from "react";
import styles from './PostsWall.module.css';
import Post from "./Post/Post";
import { POST_TYPE } from "../../../store/Reducers/Profile/PostsWall/Post/types";

export interface PostsWallElements {
	posts: POST_TYPE[]
}

const PostsWall:FC<PostsWallElements> = ({posts}) => {
	let newPostElement = React.createRef<HTMLTextAreaElement>();
	
	let postsElements = posts
		.map(post => <Post
			text={post.text}
			likes_counter={post.likes_counter}
			timestamp={post.timestamp}/>)
	
	let addNewPost = () => {
		let text = newPostElement.current?.value
		if (text) {
			//TODO: add action to add new Post:
			//addPost(text);
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

export default PostsWall;