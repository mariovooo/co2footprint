import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6ec668',
        },
        secondary: {
            main: '##9ea57c',
        },
        error: {
            main: '#d32f2f',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: '"Josefin Sans","Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        h2: { fontSize: 32 }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: '#fff'
                },
            },
        },
    }
});

export default theme;