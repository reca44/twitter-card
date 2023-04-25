import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css'
import Card from './components/Card'
import Cardiguana from './components/CardIguana'
import MiImput from './components/MiImput'
import FirstNav from './components/FirsNav'
import SecondNav from './components/Otronav'
import Fondo from './components/Fondo';
import Datagrid from './components/Datagrid';
import TablaBasic from './components/Tablebasic'
import TwitterCard from './components/TwitterCard'


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
function Oscuro() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const usuarios = [
    {
      userName: 'reca44',
      siguiendo: true,
      nombre: 'Antonio Viña López'
    },
    {
      userName: 'IbaiLlano',
      siguiendo: false,
      nombre: 'Otro tipo'
    },
    {
      userName: 'Ibai',
      siguiendo: false,
      nombre: 'Otro tipo2'
    },
    {
      userName: 'Llanos',
      siguiendo: false,
      nombre: 'Otro tipo3'
    },
    {
      userName: 'patacas',
      siguiendo: false,
      nombre: 'Otro tipo4'
    },
    {
      userName: 'prueba',
      siguiendo: false,
      nombre: 'mas prueba'
    },
  ]

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Oscuro />
        <Fondo />
        {/* <h1>pruebas tablas</h1> */}
        <h1>prueba TwitterCard</h1>
        {/* <FirstNav />
        <p></p>
        <SecondNav />
        <h1>pruebas componentes</h1> */}
        {/* <TablaBasic />
        <div className='cards'>
        <Card />
        <Cardiguana />
        <MiImput />
        </div> */}
        {usuarios.map(({ nombre, userName, siguiendo }) =>(
          <TwitterCard userName={userName} isFollow={siguiendo}>{nombre}</TwitterCard>
        ))
        }
        {/* <TwitterCard userName={userNameDos} isFollow={siguiendo} >Otro Viña López</TwitterCard> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}