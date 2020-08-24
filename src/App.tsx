import React, { Fragment, useState, useRef } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string,
  done: boolean
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('');

  const [tasks, setTasks] = useState<ITask[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault(); //cancel refresh page
    console.log(newTask);
    addTask(newTask);
    console.log(tasks);
    setNewTask('');
    taskInput.current?.focus(); //again refed to input
  }

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name: name, done: false }];
    setTasks(newTasks); //update state
  }

  const toggleDoneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i,1)
    setTasks(newTasks);
  }


  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Fragment>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  
                  <input type="text" onChange={e => setNewTask(e.target.value)}
                    value={newTask}
                    className="form-control" autoFocus 
                    ref={taskInput}/>

                  <button className="btn btn-success btn-block mt-2">
                    Save
                  </button>
                </form>
              </div>
            </div>

            {
              tasks.map((t: ITask, i: number) => {
                return <div className="card card-body mt-2" key={i}>
                  <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</h2>
                  <div>
                    <button className="btn btn-secondary" onClick={() => toggleDoneTask(i)}>
                      {t.done ? '✓' : 'x'}
                    </button>
                    <button className="btn btn-danger" onClick={() => removeTask(i)}>
                      🗑️
                  </button>
                  </div>
                </div>
              })
            }

          </Fragment>
        </div>
      </div>
    </div>
  );
}

export default App;
