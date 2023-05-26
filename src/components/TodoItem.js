import React, { useRef } from 'react';
import { RiEdit2Fill } from 'react-icons/ri';
import { IoMdDoneAll } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';




const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  
  const inputRef = useRef(null);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  }; 

  return (
    <li key={item.id} className='card'>
      <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
      <div className='btns'>
        <button onClick={() => changeFocus() }><RiEdit2Fill /></button>
        <button onClick={() => completeTodo(item) }><IoMdDoneAll/></button>
        <button onClick={() => removeTodo(item.id)}><AiFillDelete/></button>
      </div>
      {item.completed && <span className='completed'>selesai</span>}
    </li>
  );
};

export default TodoItem;
