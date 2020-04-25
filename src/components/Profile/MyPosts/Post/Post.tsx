import React from 'react'
import styles from "./Post.module.css";

export interface POST_OBJ {
	/** Text for post message */
	text: string
	/** List counter: */
	likesCounter: number
	/** Image url */
	img?: string
}

const Post: React.FC<POST_OBJ> = ({text, likesCounter, img}) => {
	return (
		<div className={styles.item}>
			<img src='https://cs8.pikabu.ru/avatars/2478/x2478687-716112817.png' alt=""/>
			{text}
			<div>
				<span>Like</span><span> {likesCounter}</span>
			</div>
		</div>
	)
}

export default Post;