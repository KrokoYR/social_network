import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import styles from './Profile.module.css'

const Profile = () => {
   return (
      <div className={styles.profile}>
         <div>
            <img src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&h=750" alt="" />
         </div>
         <div>ava + description</div>
         <MyPosts/>
      </div>
   );
};

export default Profile;
