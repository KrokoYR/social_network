import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
	return (
		<div>
			My post
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
		    <div className={styles.posts}>
                <Post text={'Hi, how are you?'}/>
                <Post text={'This is my first post!'}/>
                <Post text={`I'm okay, what bout ya?`}/>
            </div>
		</div>
	)
}

export default MyPosts;