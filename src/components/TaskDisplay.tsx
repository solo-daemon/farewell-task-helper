import { Task } from '../types';
import TaskCard from './TaskCard';

interface TaskDisplayProps {
  matchedTasks: Task[];
}

function TaskDisplay({ matchedTasks }: TaskDisplayProps) {
  return (
    <div className="task-display">
      <h2>suggested tasks</h2>
      {matchedTasks.length > 0 ? (
        <div className="task-list">
          {matchedTasks.map((task, index) => (
            <TaskCard key={index} task={task} rank={index + 1} />
          ))}
        </div>
      ) : (
        <p className="no-tasks">No tasks matched your selected personalities. Try selecting different traits!</p>
      )}
    </div>
  );
}

export default TaskDisplay;
