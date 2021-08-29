import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // (비동기) async ~ await axios 구문 = axios가 로딩이 끝날 때까지 기다렸다가 계속하라
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // axios가 끝나면 isLoading을 false로 바꿔주면서 ready 됐다고 알려주기
    this.setState({ movies, isLoading: false }) //
  }
  
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
            )
          : (
            <div className="movies">
              {movies.map(movie => {
                return (
                  <Movie 
                    key={movie.id}  // 유일한 key값을 줘야돼서 movie.id로 줌
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              })}
            </div>
          )}
      </section>
    )
  }
}

export default Home;
