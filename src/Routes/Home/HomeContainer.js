import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [state, setState] = useState({
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  });

  const getMovieApi = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await movieApi.upComing();
      const {
        data: { results: popular },
      } = await movieApi.popular();

      setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch (e) {
      setState({
        error: "can not find movies information",
      });
    } finally {
      setState({
        loading: false,
      });
    }
  };

  useEffect(() => {
    getMovieApi();
  }, []);
  console.log(state);
  const { nowPlaying, upComing, popular, error, loading } = state;
  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      error={error}
      loading={loading}
    ></HomePresenter>
  );
};

export default HomeContainer;
