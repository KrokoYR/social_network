import React from "react";
import './Profile.module.css'

const Profile = () => {
  return (
    <div className="Profile">
      <div>
        <img
          src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&h=750"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div>New post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
          <div>post3</div>
          <div>post4</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
