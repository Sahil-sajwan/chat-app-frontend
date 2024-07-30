import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      submit:{
        main: '#639C94',
      /*  light: '#E9DB5D',
        dark: '#A29415',
        //contrastText: '#242105',*/
        contrastText:'#ffffff',
      },
      outline:{
        main:'#609190',
      },
      text:{
        main:'#dedede',
        contrastText:'#ffffff',
      }

    },
    typography: {
      
        joined: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: '#348a88',
          lineHeight: 1.2,
          display:'block',
          marginBottom:5,
          marginTop:5
        },      
        left: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: '#b54a4b',
          lineHeight: 1.2,
          display:'block',
          marginBottom:5,
          marginTop:5
        },  
        message: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: '#354141',
          lineHeight: 1.2,
          display:'block',
          marginBottom:5
        },
        heading: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#21130d',
          lineHeight: 1.2,
          display:'block',
        marginBottom:20
        },
      },
     
  });

  export default theme;