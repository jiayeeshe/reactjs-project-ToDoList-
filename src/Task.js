import './App.css';

export const Task = ((props) => {   // component function
    return (
        <div style={{backgroundColor : props.completed && "green"}}>
        <h1> {props.name} </h1>
        <button onClick={ () => props.deleteTask(props.id)}> X </button>
        <button onClick={ () => props.completeTask(props.id)}> completed </button>
        </div>
        )
})