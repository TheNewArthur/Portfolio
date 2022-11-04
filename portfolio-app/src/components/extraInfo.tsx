import styled from '@emotion/styled';
import { Typography } from '@mui/material'
import { ElaineFont } from './text.styled';

interface textProps {
    text: string
}

const TextContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
`

export default function ExtraText (props: textProps) {
    return (
        <TextContainer>
            <Typography variant='subtitle1'><ElaineFont>{props.text}</ElaineFont></Typography>
        </TextContainer>
    )
}