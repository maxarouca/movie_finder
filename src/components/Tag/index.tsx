import React from 'react';

import { TagComponent } from './styles';

interface Props {
    text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
    return <TagComponent>{text}</TagComponent>;
};

export default Tag;
