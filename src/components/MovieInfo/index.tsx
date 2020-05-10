import React from 'react';
import Tag from 'components/Tag';
import Score from 'components/Score';
import { Container, Info, InfoContainer, TagsContainer } from './styles';
import formatToMoney from 'util/formatToMoney';
import convertMinsToHrsMins from 'util/convertMinsToHrsMins';
import { Flip } from 'react-reveal';

interface Props {
    sinopse: string;
    status: string;
    language: string;
    budget: number;
    revenue: number;
    image: string;
    runtime: number;
    score: number;
    genres: [Genre];
}

interface Genre {
    id: number;
    name: string;
}

const MovieInfo: React.FC<Props> = ({ sinopse, status, language, budget, revenue, genres, runtime, score, image }) => {
    return (
        <Container>
            <Info>
                <h3>Sinopse</h3>
                <p>{sinopse}</p>
                <h3>Informações</h3>
                <InfoContainer>
                    <div>
                        <h4>Situação</h4>
                        <span>{status}</span>
                    </div>
                    <div>
                        <h4>Idioma</h4>
                        <span>{language}</span>
                    </div>
                    <div>
                        <h4>Duração</h4>
                        <span>{convertMinsToHrsMins(runtime)}</span>
                    </div>
                    <div>
                        <h4>Orçamento</h4>
                        <span>{budget === 0 ? '-' : formatToMoney(budget)}</span>
                    </div>
                    <div>
                        <h4>Receita</h4>
                        <span>{budget === 0 ? '-' : formatToMoney(revenue)}</span>
                    </div>
                    <div>
                        <h4>Lucro</h4>
                        <span> - </span>
                    </div>
                </InfoContainer>
                <TagsContainer>
                    {genres.map((item) => (
                        <Tag key={item.id} text={item.name} />
                    ))}
                </TagsContainer>

                <Score value={score} moviePage={true} />
            </Info>
            {image ? (
                <Flip left>
                    <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie Poster" />
                </Flip>
            ) : (
                <img src={`https://via.placeholder.com/340x510?text=Poster+não+encontrado`} alt="" />
            )}
        </Container>
    );
};

export default MovieInfo;
