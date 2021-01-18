import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

const TvContainer = (props) => {
  const [state, setState] = useState({
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
  });

  console.log(props);

  const getTvApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: popular },
      } = await tvApi.popular();

      setState({
        topRated,
        airingToday,
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
    getTvApi();
  }, []);
  console.log(state);
  const { topRated, airingToday, popular, error, loading } = state;
  return (
    <TvPresenter
      topRated={topRated}
      airingToday={airingToday}
      popular={popular}
      error={error}
      loading={loading}
    ></TvPresenter>
  );
};

export default TvContainer;
