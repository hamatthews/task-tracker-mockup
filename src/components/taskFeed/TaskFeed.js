import Task from '../task/Task';

import './taskFeed.css';

export default function TaskFeed({taskFeedTitle}) {
    return (
        <div className='task-feed'>
            <div className='task-feed-heading'>
                <div className='task-feed-title'>{taskFeedTitle || 'All'}</div>
                <select>
                    <option>Sort by</option>
                    <option>Date</option>
                    <option>Alphabetical</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>
            </div>
            <div className=''></div>
            <Task
                name='Feed the Cats'
                dueDate='Tuesday 4/18/23 7:00pm'
                frequency='Everyday'
                description='Divide a can of catfood between both of the cats'
                labels={[{name: 'Personal', color: 'rgb(200,200,255)'}, {name: 'Urgent', color: 'rgb(255,200,200)'}]}
            />
            <Task
                name='Pet the Cats'
                dueDate='Tuesday 4/18/23 7:05pm'
                frequency='Everyday'
                description='Momo likes to have her head scratched'
                labels={[{name: 'Personal', color: 'rgb(200,200,255)'}, {name: 'Urgent', color: 'rgb(255,200,200)'}]}
            />
        </div>
    )
}