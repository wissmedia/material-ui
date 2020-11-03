import { createMuiTheme } from '@material-ui/core/styles';

const sweetPink = "#fbb5e6"
const sweetPurple = "#d68cff"
const sweetTurq = "#b4e3ff"

export default createMuiTheme({
  palette: {
    common: {
      pink: `${sweetPink}`,
      purple: `${sweetPurple}`,
      turq: `${sweetTurq}`,
    },
    primary: {
      main: `${sweetPink}`
    },
    secondary: {
      main: `${sweetPurple}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    },
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    }
  }
})