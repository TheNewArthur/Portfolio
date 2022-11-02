import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import * as React from 'react';

interface textProps {
    text: string
}

const TextContainer = styled.div`
    width: 50%;
    margin: 30px auto;
`


export default function ExtraText (props: textProps) {
    return (
        <TextContainer>
            <Typography variant='subtitle1'>{props.text}</Typography>
        </TextContainer>
    )
}