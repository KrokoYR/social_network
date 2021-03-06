import React from 'react'
import styles from "./Post.module.css";
import { POST_TYPE } from "../../../../store/Reducers/Profile/PostsWall/Post/types";

const Post: React.FC<POST_TYPE> = ({
	                                   text,
	                                   likes_counter,
	                                   timestamp,
	                                   img_url,
	                                   video_url
                                   }) => {
	return (
		<div className={styles.item}>
			<img src='https://cs8.pikabu.ru/avatars/2478/x2478687-716112817.png' alt=""/>
			{text}
			<div>
				<span>Like</span><span> {likes_counter}</span>
			</div>
		</div>
	)
}

export default Post;