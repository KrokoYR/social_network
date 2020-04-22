import React from 'react'
import styles from "./Post.module.css";

interface PostProps {
	/** Text for post message */
	text:string
	/** Image url */
	img?: string
}

const Post: React.FC<PostProps> = ({text, img}) => {
	return (
		<div className={styles.item}>
			<img src='https://cs8.pikabu.ru/avatars/2478/x2478687-716112817.png' alt=""/>
			{text}
			<div>
				<span>Like</span>
			</div>
		</div>
	)
}

export default Post;