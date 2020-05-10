import React from 'react';

import { Input } from './styles';

interface Props {
    handleChange: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ handleChange }) => {
    return (
        <Input
            type="search"
            name="search"
            placeholder="Busque um filme por nome, ano ou gênero"
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default SearchInput;
