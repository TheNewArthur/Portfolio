import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import { ElaineFont } from './text.styled'

const FlexBoxContainer = styled.div`
    display: flex;
    flex-direction;
    justify-content: space-between;
`

export default function InfoTop () {

    return(
        <FlexBoxContainer>
            <Typography variant='subtitle2'><ElaineFont>Arthur Pluym</ElaineFont></Typography>
            <Typography variant='subtitle2'><ElaineFont>Based in Belgium</ElaineFont></Typography>
        </FlexBoxContainer>
    )
}