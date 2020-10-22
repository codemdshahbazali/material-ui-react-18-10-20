import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//custom css to a component from material UI
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 10,
    borderRadius: 10,
    color: 'white',
    padding: 15,
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   },
  // },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Custom Styled Button</Button>;
}

function App() {
  const [checked, setChecked] = useState(true);
  return (
    // component for creating theme inside our app. Should be at teh top of the component three. This way it appllies to all the below component
    <ThemeProvider theme={theme}>
      <Container maxWidth='ls'>
        <div className='App'>
          <header className='App-header'>
            {/* Gives an APP bar to the application */}
            <AppBar color='secondary'>
              {/* Placed inside the app bar. Gives a toolbar */}
              <Toolbar>
                {/* Used to contain a menu icon button inside app bar */}
                <IconButton>
                  {/* Menu button */}
                  <MenuIcon />
                </IconButton>
                {/* Helps give and header or text. If we use this for text then theme can be easily applied to the text*/}
                <Typography variant='h6'>MUI Theming</Typography>
                <Button variant='contained'>Login</Button>
              </Toolbar>
            </AppBar>
            {/* Typograpghy component */}
            <Typography variant='h2'>Welcome to Mui Themeing</Typography>
            {/* Typography component with component type */}
            <Typography variant='subtitle1' component='div'>
              Learning Material UI
            </Typography>
            {/* Custom styling a button */}
            <ButtonStyled />
            {/* Input text with password */}
            <TextField
              variant='filled'
              color='secondary'
              type='email'
              // type="time"
              // type="date"
              label='Email'
              // value="shahbaz@gmail.com"
              placeholder='test@gmail.com'
            />
            {/* Example of an grid */}
            <Grid container spacing={4} justify='center'>
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 95, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 95, width: '100%' }} />
              </Grid>
              <Grid item xs={3} lg={6}>
                <Paper style={{ height: 95, width: '100%' }} />
              </Grid>
            </Grid>

            {/* Checkbox with a label */}
            <FormControlLabel
              control={
                <CheckBox
                  checked={checked}
                  icon={<DeleteIcon />}
                  checkedIcon={<SaveIcon />}
                  onChange={(e) => setChecked(e.target.checked)}
                  inputProps={{
                    'aria-label': 'secondry checkbox',
                  }}
                />
              }
              label='Testing Checkboxes'
            />
            {/* Group button with group action together */}
            <ButtonGroup color='primary' variant='contained'>
              {/* Button with icons */}
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Delete</Button>
            </ButtonGroup>
            {/* How to use an iamge or svg */}
            <img src={logo} className='App-logo' alt='logo' />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
