import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import TodoItems from "./todo-items";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
  },
  listStyle: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoContainer() {
  const classes = useStyles();

  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    };
  });

  //The below code snippet is called IIFE(Immediately invoked function expression)
  const prioritisedTodos = (function Prioritize() {
    const importantTodos = [];
    const notImportantTodos = [];

    todos.forEach((todo) => {
      if (todo.important) {
        importantTodos.push(todo);
      } else {
        notImportantTodos.push(todo);
      }
    });

    return importantTodos.concat(notImportantTodos);
  })();

  console.log("Todo state", todos);

  return (
    <Box className="class.root">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" align="left" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (!todo.completed) {
                return <TodoItems key={todo.id} {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" align="left" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (todo.completed) {
                return <TodoItems key={todo.id} {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
