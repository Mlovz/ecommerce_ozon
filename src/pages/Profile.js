import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { auth } = useSelector((state) => state);
  const { pathname } = useLocation();
  const [userData, setUserData] = useState({})
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
      if(auth.token){
        setUserData(auth.user)
      }
  },[auth.user])
  
  return (
    <div className="profile">
      <div className="container">
        <div className="location_pos">
          <span>Главная </span>
          <span> -> </span>
          <span>{pathname === "/profile" && "Профиль"} </span>
        </div>

        <div className="title profile__title">
          <span>Профиль</span>
        </div>

        <div className="profile__body">
          <div className="profile__body__top">
            <div className="top__img">
              <div className="top__img__div">
                <img src={avatar ? URL.createObjectURL(avatar) : userData.avatar} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </div>
              <h4>{userData.name}</h4>
            </div>
          </div>
          <div className="profile__body__bottom">
            <div className="bottom__title">
              <span>Данные профиля</span>
            </div>
            <div className="bottom__name">
              <input type="text" value={userData.name} />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Отчество" />
            </div>
            <div className="bottom__log">
              <input type="text" placeholder="Логин" />
              <input type="text" placeholder="Телефон" />
              <input type="text" value={userData.email} />
            </div>

            <div className="bottom__personal">
              Нажимая на кнопку «Сохранить», Вы даете согласие на обработку
              персональных данных. Мы не передаем Ваши данные третьим лицам.
            </div>

            <div className="bottom__btn">
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
