import React from "react";

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
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;