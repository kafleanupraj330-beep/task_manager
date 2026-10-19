import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks }) {
    return (
        <div className="task-list-container">
            <h2>Tasks</h2>
            {tasks.length === 0 ? (
                <p className="no-tasks">No tasks added yet.</p>
            ) : (
                <div className="cards-grid">
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;