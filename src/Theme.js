import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    bg: {
      light: '#E7F6F2',
      primary: '#A5C9CA',
      dark: '#2C3333',
    },
    primary: {
      main: '#A5C9CA',
    },
    secondary: {
      main: '#114978',
    },
    accent: {
      main: '#58F501',
    },
    text: {
      focus: '#F9FCF7',
      primary: '#2C3333',
      secondary: '#E7F6F2',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          boxShadow: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})
