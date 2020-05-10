import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
    title: string;
}

function Header({ title }: Props) {
    return (
        <Container>
            <Link to="/">
                <h1>{title}</h1>
            </Link>
        </Container>
    );
}

export default Header;
