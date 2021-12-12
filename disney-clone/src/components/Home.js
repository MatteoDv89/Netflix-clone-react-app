import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import News from "./News";
import Discovery from "./Discovery";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/movie.action";
import db from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import Marvel from "./Marvel";

const Home = () => {
  const userName = useSelector((state) => state.user.name);
  const MovieData = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  let recommends = [];
  let originals = [];
  let news = [];
  let marvel = [];

  useEffect(() => {
    const getMovieData = async () => {
      const snapshot = await getDocs(collection(db, "movies"));

      snapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;

          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;

          case "news":
            news.push({ id: doc.id, ...doc.data() });
            break;

          case "marvel":
            marvel.push({ id: doc.id, ...doc.data() });
            break;

          default:
            return null;
        }
      });

      dispatch(
        getMovies({
          recommend: recommends,
          original: originals,
          news: news,
          marvel: marvel,
        })
      );
    };

    getMovieData();
  }, [userName]);

  const moviesRefRecommends = useRef(recommends);
  const moviesRefOriginals = useRef(originals);
  const moviesRefNews = useRef(news);
  const moviesRefMarvel = useRef(marvel);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends movies={moviesRefRecommends} />
      <Discovery movies={moviesRefOriginals} />
      <Marvel movies={moviesRefMarvel} />
      <News movies={moviesRefNews} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;

  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 60px;
  box-sizing: border-box;
  margin-left: -8px;
  margin-right: -8px;

  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("image/home-background.png") center center / cover fixed;
    content: "";
    position: absolute;
    left: 0;
    inset: 0px;
    z-index: -1;
  }
`;

export default Home;
