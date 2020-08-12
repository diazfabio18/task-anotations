import React, {Fragment, useState} from 'react';

function App(): JSX.Element {

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //cancel refresh page
    console.log('Submiting');
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)} />
        <button>
          Save
        </button>
      </form>
    </Fragment>
  );
}

export default App;
