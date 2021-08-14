import React from 'react'
import {Link} from 'react-router-dom'
import Slider from '../utils/Slider'
import { SliderData } from '../utils/SliderData'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Slider slider={SliderData}/>
                <div className="home__popular">
                    <div className="home__popular__title">
                        <div className='title-h1_fs'>Популярные категории</div>
                    </div>
                    <div className="home__popular__blocks">
                        <Link to='/menu' className="home__popular__item">
                            <div className="home__popular__item--img">
                                <img src="https://sc04.alicdn.com/kf/Hfef41c31c87e49ecb0cf3bbe0b45e16a2.jpg" alt="" />
                            </div>
                            <div className="home__popular__item--text">
                                Мужская
                            </div>
                        </Link>

                        <Link to='/menu' className="home__popular__item">
                            <div className="home__popular__item--img">
                                <img src="https://ae01.alicdn.com/kf/H03ff98b11d6449da9384494692cc1fe6R/Niqab.jpg_q50.jpg" alt="" />
                            </div>
                            <div className="home__popular__item--text">
                                Женская
                            </div>
                        </Link>

                        <Link to='/menu' className="home__popular__item">
                            <div className="home__popular__item--img">
                                <img src="https://s.sellercheck.ru/pic/7c/49/sezon-vesna-osen-bryuki-klesh-plate-dlya-devochek-s-dlinnymi-7c49686b37b2628296c8970723f7bf13-500.jpg" alt="" />
                            </div>
                            <div className="home__popular__item--text">
                                Детская
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
