const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) => {
  nowPlaying &&
    nowPlaying.length > 0 &&
    nowPlaying.map((n) => console.log(n.title));

  return <h1>nowPlaying</h1>;
};

export default HomePresenter;
