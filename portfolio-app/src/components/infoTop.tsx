import * as React from 'react';
import styled from '@emotion/styled'
import {Typography} from '@mui/material'

const FlexBoxContainer = styled.div`
    display: flex;
    flex-direction;
    justify-content: space-between;
`

const FlexItem = styled.div`
`


export default function InfoTop () {

    return(
        <FlexBoxContainer>
            <FlexItem><Typography variant='subtitle2'>Arthur Pluym</Typography></FlexItem>
            <FlexItem><Typography variant='subtitle2'>Based in Belgium</Typography></FlexItem>
        </FlexBoxContainer>
    )
}