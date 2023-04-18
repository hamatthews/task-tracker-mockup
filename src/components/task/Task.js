import './task.css';

export default function Task({status, name, dueDate, frequency, description, labels}) {
    
    const TaskStatus = () => {
        return (
            <div className='task-status'>
                <svg className='task-status-bubble' viewBox='0 0 50 50'>
                    <circle cx='25' cy='25' r='19' fill='none' stroke='black' />
                </svg>
            </div>
        )
    }

    const TaskLabels = () => {
        return (
            <div className='task-labels'>{
                labels && labels.map(e => <div className='task-label' style={{backgroundColor: e.color}}>{e.name}</div>)
            }</div>
        )
    }

    return (
        <div className='task'>
            <TaskStatus />
            <div className='task-name task-field'>{name}</div>
            <div className='task-due-date task-field'>{dueDate}</div>
            <div className='task-frequency task-field'>{frequency}</div>
            <div className='task-description task-field'>{description}</div>
            <TaskLabels />
        </div>
    )
}