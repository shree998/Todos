import "./App.css";
import {
  AppBar,
  makeStyles,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Paper,
} from "@material-ui/core";
import Adder from "./Components/todo-adder";
import TodoContainer from './Components/todo-container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper: {
    textAlign: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img alt="SND ToDo" style={{ width: "50px" }} src="SND-logo.png" />
          </IconButton>
          <Typography align="center" variant="h5" color="inherit">
            ToDos
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          <Adder />
        </Paper>
        <TodoContainer/>
      </Container>
    </Box>
  );
}

export default App;
