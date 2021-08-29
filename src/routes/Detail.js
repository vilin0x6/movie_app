import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {  /*detail을 클릭해서 movie-detail로 직접 들어간 게 아니라, 주소창에 movie-detail이라고 직접 입력한 경우*/
            history.push("/");  /*그 경우 home화면으로 돌아감*/
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
            <div className="detail">
                <img className="detail_backgroundimg" src={location.state.poster}></img>
                <img className="detail_poster"
                     src={location.state.poster}
                     alt={location.state.title}
                     title={location.state.title}>
                </img>
                <h3 className="detail__title">{location.state.title}</h3>
                <div className="detail__year">{location.state.year}</div>
                <ul className="detail__genres">
                    {location.state.genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                        {genre}
                    </li>
                    ))}
                </ul>
                <div className="detail__summary">{location.state.summary}</div>
            </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;