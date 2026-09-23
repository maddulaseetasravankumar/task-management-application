import React from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemText from "@material-ui/core/ListItemText";

import Checkbox from "@material-ui/core/Checkbox";

import IconButton from "@material-ui/core/IconButton";

import EditIcon from "@material-ui/icons/Edit";

import DeleteIcon from "@material-ui/icons/Delete";

import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",

    padding: 0,

    backgroundColor: "transparent",
  },
}));

const TodoList = ({
  theme,
  todos,
  completeTodo,
  editTodo,
  deleteTodo,
  saveTodo,
  noteRef,
  preventSubmit,
}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <List className={classes.root}>
        {todos.map((todo, inx) => {
          const labelId = `list-todo-${inx}`;

          return (
            <ListItem
              key={`todo-${inx}`}
              className={`todo-item ${
                todo.isCompleted ? "todo-completed" : ""
              }`}
              role={undefined}
              dense
            >
              {/* =========================
                  CHECKBOX
              ========================== */}

              <ListItemIcon>
                <Checkbox
                  className="todo-checkbox"
                  color="primary"
                  edge="start"
                  checked={Boolean(todo.isCompleted)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                  onChange={() => completeTodo(inx)}
                  onKeyPress={preventSubmit}
                />
              </ListItemIcon>

              {/* =========================
                  TODO TEXT / EDIT INPUT
              ========================== */}

              {!todo.isEditing ? (
                <ListItemText
                  className="todo-text"
                  id={labelId}
                  primary={todo.text}
                />
              ) : (
                <>
                  <label htmlFor={`task-${inx}`} className="visuallyhidden">
                    {todo.text}
                  </label>

                  <input
                    id={`task-${inx}`}
                    className="form__edit-input"
                    defaultValue={todo.text}
                    ref={(element) => {
                      noteRef.current[inx] = element;
                    }}
                    onKeyPress={preventSubmit}
                  />
                </>
              )}

              {/* =========================
                  ACTION BUTTONS
              ========================== */}

              <div className="todo-actions">
                {!todo.isEditing ? (
                  <IconButton
                    className="todo-action-button"
                    aria-label="edit"
                    onClick={() => editTodo(inx)}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className="todo-action-button"
                    aria-label="save"
                    onClick={() => saveTodo(inx)}
                  >
                    <BookmarkIcon />
                  </IconButton>
                )}

                <IconButton
                  className="todo-action-button"
                  aria-label="delete"
                  onClick={() => deleteTodo(inx)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </ListItem>
          );
        })}
      </List>
    </ThemeProvider>
  );
};

export default TodoList;
