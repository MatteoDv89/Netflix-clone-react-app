import React, { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Details = () => {
  const movieData = useSelector((state) => state.movies);

  const [data, setData] = useState([]);
  const [imdbData, setImdbData] = useState(null);
  const id = useParams();
  const [modal, setModal] = useState(false);
  const [detailSubtilte, setDetailSubtile] = useState("");
  const [imdbDataSerie, setImdbDataSerie] = useState("");
  const [numberEpisode, setNumberEpisode] = useState(1);

  const Array = Object.keys(movieData).map((i) => movieData[i]);

  const movieArray = [...Array[0], ...Array[1], ...Array[2]];
  const type = movieArray.filter((f) => f.id.includes(id.id))[0].type;

  useEffect(() => {
    if (type === "recommend") {
      setData(movieData.recommend);
    }
    if (type === "news") {
      setData(movieData.news);
    }

    if (type === "original") {
      setData(movieData.original);
    }
  }, []);
  useEffect(() => {
    setImdbData(detailsData?.imdbId);
  }, [data]);

  useEffect(() => {
    setDetailSubtile(detailsData?.subTitle);
  }, [detailSubtilte]);

  useEffect(() => {
    setImdbDataSerie(imdbData + `-1-${numberEpisode}`);
  }, [imdbData, numberEpisode]);

  const detailsData = data?.filter((movie) => movie.id === id.id)[0];
  console.log(detailsData?.backgroundImg);
  console.log(imdbDataSerie);

  return (
    <>
      <Container>
        <Background>
          <img src={detailsData?.backgroundImg} alt="logo" />
        </Background>

        <ContentMeta>
          <Controls>
            <Player onClick={() => setModal(true)}>
              <img src="/image/play-icon-black.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src="/image/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </Trailer>
            <AddList>
              <span />
              <span />
            </AddList>
            <Description>
              <span>{detailsData?.subTitle}</span>
              <p>{detailsData?.description}</p>
            </Description>
          </Controls>
        </ContentMeta>
        {modal && imdbData !== null && (
          <Modal>
            <span onClick={() => setModal(false)} />
            <span onClick={() => setModal(false)} />
            <iframe
              src={
                detailSubtilte?.includes("Série")
                  ? `https://autoembed.xyz/tv/imdb/${imdbDataSerie}`
                  : "https://autoembed.xyz/movie/imdb/" + imdbData
              }
              width="100%"
              height="100%"
              title={detailsData?.title}
            ></iframe>
          </Modal>
        )}
      </Container>
    </>
  );
};

const Modal = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  margin-right: 25px;
  margin-left: -25px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur;

  span {
    position: absolute;
    top: 50px;
    right: 5%;
    cursor: pointer;

    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 4px;
      transform: translateY(-1px) rotate(-135deg);
      width: 22px;
    }

    &:nth-child(2) {
      height: 22px;
      transform: translate(-9px, -10px) rotate(45deg);
      width: 4px;
    }
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 54px;
  width: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translateX(1px) rotate(0deg);
      width: 22px;
    }

    &:nth-child(2) {
      height: 22px;
      transform: translateX(-11px) rotate(0deg);
      width: 2px;
    }
  }
  &:hover {
    transform: scale(1.1) rotate(360deg);
    transition: rotate 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
const Description = styled.div`
  position: absolute;
  left: 0px;
  top: 100%;
  margin-top: 12px;
`;

const Trailer = styled.button`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  font-size: 25px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;

  color: rgb(249, 249, 249);

  img {
    width: 42px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 18px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }

  span {
    position: relative;
    top: 1px;
    font-weight: 500;
    margin-left: 3.5px;
  }
`;

const Player = styled.button`
  font-size: 25px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 42px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 18px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }

  span {
    position: relative;
    top: 1px;
    font-weight: 500;
    margin-left: 3.5px;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px;
  min-height: 56px;
  position: absolute;
  top: 35%;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;

  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 120%;
    height: 120%;
    padding: 0px;
    box-sizing: border-box;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media {
      width: initial;
    }
  }
`;
const Container = styled.div`
  position: relative;
  widht: 100vw;
  height: 100vh;

  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  font-color: #f9f9f9;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  h1 {
    position: absolute;
    top: 80px;
    display: inline-block;
    height: 250px;

    font-size: 6em;
    letter-spacing: 1.05px;
    line-height: 85px;
    padding-right: 50%;
    widht: 20%;

    text-align: left;
  }
`;

export default Details;
