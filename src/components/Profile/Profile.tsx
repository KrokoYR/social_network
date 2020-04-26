import React, {FC} from "react";
import styles from './Profile.module.css'

import PostsWall, {PostsWallElements} from "./PostsWall/PostsWall";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile:FC<PostsWallElements> = ({posts}) => {
	return (
		<div className={styles.profile}>
			<ProfileInfo/>
			<PostsWall posts={posts} />
		</div>
	);
};

export default Profile;
