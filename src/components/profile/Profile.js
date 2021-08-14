import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import { logout } from "../../redux/actions/authAction";

const Profile = () => {
  const { auth } = useSelector((state) => state);
  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    setProfile(false)
  }
  

  return (
    <div className="header__top__profile">
      <div className="profile__img" onClick={() => setProfile(!profile)}>
        <img src={auth.user.avatar} alt="" />
        {profile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            className="bi bi-caret-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        )}
      </div>
      {
          profile && 
          <div className='profile__modal'>
            <Link onClick={() => setProfile(false)}  to='/profile'>Мой профиль</Link>
            <Link onClick={() => setProfile(false)}  to='/orders'>Мои покупки</Link>
            <Link onClick={handleLogout}  to='/logout'>Выйти</Link>
          </div>
      }
    </div>
  );
};

export default Profile;
