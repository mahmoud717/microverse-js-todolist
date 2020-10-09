import shortid from 'shortid';

function initializeState() {
  const state =
    localStorage.getItem('state') === null
      ? {
          todos: [],
          lists: [
            {
              name: 'default',
              todos: 0,
            },
          ],
        }
      : JSON.parse(localStorage.getItem('state'));

  return state;
}

function addList(name, state) {
  if (!state.lists.some((el) => el.name === name.toLowerCase())) {
    state.lists.push({
      name: name.toLowerCase(),
      todos: 0,
    });
  }
  localStorage.setItem('state', JSON.stringify(state));
}

function addTodo({ todo, list }, state) {
  state.todos.push({
    id: shortid.generate(),
    todo,
    list,
    priority: 'normal',
  });
  state.lists.map((el) => {
    if (el.name === list) {
      el.todos += 1;
    }
  });
  localStorage.setItem('state', JSON.stringify(state));
}

function toggleStatus(id, state) {
  state.todos.map((todo) => {
    if (todo.id === id) {
      todo.status = todo.status !== true;
    }
    return todo;
  });
  
  localStorage.setItem('state', JSON.stringify(state));
}

function removeTodo(id, state) {
  const todo = state.todos.find((todo) => todo.id === id);
  state.todos = state.todos.filter((el) => el.id !== id);
  state.lists.map((list) => {
    if (list.name === todo.list) {
      list.todos -= 1;
    }
    return list;
  });

  localStorage.setItem('state', JSON.stringify(state));
}

function editTodoField(id, field, value, state) {
  state.todos.map((todo) => {
    if (todo.id === id) {
      todo[field] = value;
    }
    return todo;
  });

  localStorage.setItem('state', JSON.stringify(state));
}

export default {
  initializeState,
  addList,
  addTodo,
  toggleStatus,
  removeTodo,
  editTodoField,
};
