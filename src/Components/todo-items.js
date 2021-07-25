import React from "react";
import {
  ListItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import {TOGGLE_TODO, DELETE_TODO, TOGGLE_IMPORTANT} from "../Redux/actions";
import {useDispatch} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

export default function TodoItems({ id, title, important, completed }) {
    const dispatch = useDispatch();
  
    function toggleCheckbox(){
        dispatch({
            type: TOGGLE_TODO,
            payload: {
                id,
            }
        })
    }

    function deleteTodos(){
        dispatch({
            type: DELETE_TODO,
            payload: {
                id,
            }
        })
    }

    function importantTodos(){
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {
                id,
            }
        })
    }

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox onChange={toggleCheckbox} checked={completed} name={title} color="primary" />
          }
          label={<Typography style={{textDecoration: completed && 'line-through',}}> {title}</Typography>}
        ></FormControlLabel>
      </FormGroup>
      <ListItemSecondaryAction>
      <IconButton onClick={importantTodos} edge="end">
              {important? <StarIcon/>: <StarOutlineIcon/>}
          </IconButton>
          <IconButton onClick={deleteTodos} edge="end">
              <DeleteIcon />
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
