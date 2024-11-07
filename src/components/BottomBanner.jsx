import React, { useState, useEffect } from 'react';
import { urlFor } from '../utils/client';

const BottomBanner = ({ footerBannerData: { discount, largeText, largeText2, smallText, description, buttonText, image, midText } }) => {
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });
    const deadline = '2024-12-15';

    const getTimeRemaining = () => {
        const time = Date.parse(deadline) - Date.parse(new Date);
        const days = Math.floor((time / 1000 / 60 / 60 / 24));
        const hours = Math.floor(((time / 1000 / 60 / 60 % 24)));
        const minutes = Math.floor(((time / 1000 / 60 % 60)));
        const seconds = Math.floor(((time / 1000 % 60)));

        setTime({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }
    useEffect(() => {
        getTimeRemaining();

        const intervalTimer = setInterval(getTimeRemaining, 1000)
    }, [])

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num
        } else {
            return num
        }
    }
    return (
        <div className='footer-banner-container'>
            <div className="banner-desc">
                <div className="left">
                    <p>{discount}</p>
                    <h3>{largeText}</h3>
                    <h3>{largeText2}</h3>
                    <p>{smallText}</p>
                </div>
                <div className="right">
                    <div className="timer">
                        <span className="days">{addZero(time.days)}</span>
                        <div className="semicologne">:</div>
                        <span className="hours">{addZero(time.hours)}</span>
                        <div className="semicologne">:</div>
                        <span className="minutes">{addZero(time.minutes)}</span>
                        <div className="semicologne">:</div>
                        <span className="seconds">{addZero(time.seconds)}</span>
                    </div>
                    <p>{description}</p>
                    <button className="btn">{buttonText}</button>
                </div>
                {
                    image && <img src={urlFor(image)} className='banner-bottom-image' />
                }
            </div>
        </div>
    )
}

export default BottomBanner