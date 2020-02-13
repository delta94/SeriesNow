import React from "react";
import { IShow } from "../../context/ShowContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TrendingShow: React.FC<IShow> = ({ title, original_name, poster_path, overview, release_date, first_air_date, vote_average, id }) => {
    let showType;

    if (title) {
        showType = "movie";
    } else {
        showType = "tv";
    }

    return (
        <div>
            <StyledLink to={`/${showType}/${id}`}>
                <ShowCard>
                    <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
                    <ShowDetails>
                        <Title>
                            {original_name}
                            {title}
                        </Title>
                        <ReleaseDate>
                            {release_date ? "Released: " : "First Air Date: "}
                            {release_date}
                            {first_air_date}
                        </ReleaseDate>
                        <Overview>
                            {overview ? overview.slice(0, 150) : overview}
                            {"..."}
                        </Overview>
                        <Info>
                            <Rating>
                                Rating:{" "}
                                <span style={{ color: vote_average >= 8 ? "green" : vote_average >= 5 ? "orange" : "red" }}>
                                    {vote_average}
                                </span>
                            </Rating>
                        </Info>
                    </ShowDetails>
                </ShowCard>
            </StyledLink>
        </div>
    );
};

const StyledLink = styled(Link)`
    color: white;
`;

const ShowCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 250px;
    height: 360px;
    margin: 15px;
    border-radius: 3px;
    box-shadow: -5px -5px 20px #111, 5px 5px 20px #222;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.2);

        img {
            filter: blur(22px);
            filter: brightness(20%);
        }

        div {
            opacity: 1;
        }
    }
`;

const Img = styled.img`
    width: 100%;
    height: 360px;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
`;

const ShowDetails = styled.div`
    position: absolute;
    opacity: 0;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: all 0.6s ease;
`;

const Title = styled.h1`
    font-size: 1.8rem;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ReleaseDate = styled.p`
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 10px 0;
    flex: 1;
`;

const Overview = styled.p`
    flex: 4;
    font-size: 1.2rem;
`;

const Info = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Rating = styled.p`
    font-weight: 600;
    font-size: 1.3rem;

    span {
        font-size: 1.3rem;
    }
`;

const Button = styled.button`
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;

    img {
        height: 30px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default TrendingShow;