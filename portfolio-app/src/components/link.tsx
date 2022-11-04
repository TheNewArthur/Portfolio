import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeColor } from '../themes/themes';


const linkText = ['Home', 'Work', 'About Me']

export default function Links () {
    return (
        <ThemeProvider theme={themeColor}>
            <div>
                <Button color='primary'>{linkText[1]}</Button>
                <Button color='primary'>{linkText[2]}</Button>
            </div>
        </ThemeProvider>
        
    )
}