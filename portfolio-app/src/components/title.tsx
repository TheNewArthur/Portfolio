import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import * as React from 'react';

interface titleProps {
    text: string
}

const TitleHolder = styled.div`
    margin: 30px 0px;
`

export default function Title (props:titleProps) {
    return(
        <TitleHolder>
            <Typography variant='h3'>{props.text.toUpperCase()}</Typography>
        </TitleHolder>
    )
}