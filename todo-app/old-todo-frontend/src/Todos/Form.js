import React, { useState } from 'react';

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState('');

  const onChange = ({ target }) => {
    console.log(text);
    setText(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo({ text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default TodoForm;
