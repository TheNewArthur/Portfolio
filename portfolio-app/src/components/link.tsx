import styled from '@emotion/styled';
import { Button } from '@mui/material';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const LinkHolder = styled.div`
    transform: rotate(0deg)
`

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});


const linkText = ['Home', 'Work', 'About']

export default function Links () {
    return (
        <ThemeProvider theme={theme}>
            <LinkHolder>
                <Button color='primary'>{linkText[1]}</Button>
                <Button color='primary'>{linkText[2]}</Button>
            </LinkHolder>
        </ThemeProvider>
        
    )
}