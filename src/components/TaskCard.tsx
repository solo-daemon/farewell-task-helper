import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  rank: number;
}

function TaskCard({ task, rank }: TaskCardProps) {
  return (
    <div className="task-card">
      <div className="task-rank">#{rank}</div>
      <div className="task-content">
        <h3 className="task-text">{task.text}</h3>
        <div className="task-personalities">
          {task.personalities.map(personality => (
            <span key={personality} className="task-personality-tag">
              {personality}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
