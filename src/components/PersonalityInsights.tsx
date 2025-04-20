// src/components/PersonalityInsights.tsx
import { Task } from '../types';

interface PersonalityInsightsProps {
  selectedPersonalities: string[];
  tasks: Task[];
}

function PersonalityInsights({ selectedPersonalities, tasks }: PersonalityInsightsProps) {
  if (selectedPersonalities.length === 0) {
    return null;
  }

  // Find how many tasks are associated with each selected personality
  const personalityTaskCounts = selectedPersonalities.map(personality => {
    const count = tasks.filter(task => 
      task.personalities.includes(personality)
    ).length;
    
    return { personality, count };
  });

  // Sort by count (highest first)
  personalityTaskCounts.sort((a, b) => b.count - a.count);

  return (
    <div className="personality-insights">
      <h3>bina matlab ke insights</h3>
      <div className="insights-content">
        {personalityTaskCounts.map(({ personality, count }) => (
          <div key={personality} className="insight-item">
            <div className="insight-bar" style={{ width: `${Math.min(100, (count / tasks.length) * 500)}%` }}></div>
            <div className="insight-label">
              <span className="personality-name">{personality}</span>
              <span className="task-count">{count} tasks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalityInsights;