import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TaskFeed from '../taskFeed/TaskFeed';

import './taskTracker.css';

export default function TaskTracker() {
    return (
        <div className='task-tracker'>
            <Navbar />
            <Sidebar />
            <TaskFeed />
        </div>
    )
}