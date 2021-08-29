import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
        <div className="about__container">
            <span className="about__title">
                Movie App은 무엇인가요?
            </span>
            <span className="about__description">
                Movie App은 영화에 관한 짧은 소개글을 볼 수 있는 서비스입니다.
                매일 업데이트 되는 영화 리스트를 통해 오늘 볼 영화를 쉽게 골라보세요!
            </span>
        </div>
    </div>
  )
}

export default About;