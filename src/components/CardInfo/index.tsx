import React from 'react';
import Tag from 'components/Tag';
import Score from 'components/Score';
import { Container, Header, Content, TagsContainer } from './styles';

interface Props {
    name: string;
    sinopse: string;
    date: string;
    score: number;
    tags?: [Genre];
}

interface Genre {
    id: number;
    name: string;
}

function CardInfo({ name, sinopse, date, score, tags }: Props) {
    return (
        <Container>
            <Header>
                <h2>{name}</h2>
                <Score value={score} moviePage={false} />
            </Header>
            <Content>
                <span>{date}</span>
                <p>{sinopse}</p>
                <TagsContainer>{tags && tags.map((item) => <Tag key={item.id} text={item.name} />)}</TagsContainer>
            </Content>
        </Container>
    );
}

export default CardInfo;
