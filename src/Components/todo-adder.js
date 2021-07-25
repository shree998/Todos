import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import { Box, TextField, Button } from "@material-ui/core";
import {ADD_TODO} from "../Redux/actions";



export default function Adder() {
  const [title, setTitle] = useState(null);
  const titleFieldRef = useRef(null);
  const dispatch = useDispatch();

  function textChange(event){
    setTitle(event.target.value);
  }


  function AddTodos() {
    //Here we will dispatch the actions
    if(title){
      dispatch({
        type: ADD_TODO,
        payload: {
          title,
        },
      });
      setTitle('');
      titleFieldRef.current.value='';
    }
    
  }

  return (
    <Box>
      <TextField onChange={textChange} inputRef={titleFieldRef} style={{width:400}} label="Add new Todo" variant="filled" />

      <Button onClick={AddTodos} style={{height:55}} variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}
