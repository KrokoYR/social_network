import React from "react";
import style from  '../MyPosts.module.css';

const MyPosts = () => {
   return (
      <div className={style.myPosts}>
         My post
         <div className={style.newPost}>
            New post
         </div>
         <div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
            <div>post4</div>
         </div>
      </div>
   )
}

export default MyPosts;