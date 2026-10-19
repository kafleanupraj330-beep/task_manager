import React from 'react';

function TaskCard({ task }) {
    return (
        <div className={`task-card priority-${task.priority.toLowerCase()}`}>
            <h3>{task.name}</h3>
            <p><strong>Due Date:</strong> {task.date}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
        </div>
    );
}

export default TaskCard;