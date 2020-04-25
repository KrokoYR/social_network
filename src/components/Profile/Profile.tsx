import React, {FC} from "react";
import MyPosts, { MyPostsElem } from "./MyPosts/MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile:FC<MyPostsElem> = ({posts, addPost}) => {
	return (
		<div className={styles.profile}>
			<ProfileInfo/>
			<MyPosts posts={posts} addPost={addPost}/>
		</div>
	);
};

export default Profile;
