import { Task } from '../types';

export function matchTasks(selectedPersonalities: string[], allTasks: Task[]): Task[] {
  // Create a scoring system for each task
  const scoredTasks = allTasks.map(task => {
    // Count how many of the selected personalities match this task
    const matchCount = task.personalities.filter(
      taskPersonality => selectedPersonalities.includes(taskPersonality)
    ).length;
    
    return {
      task,
      score: matchCount
    };
  });
  
  // Sort tasks by their match score (highest first)
  const sortedTasks = scoredTasks
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0) // Only include tasks with at least one matching personality
    .map(item => item.task);
  
  // Return the top 3 matches (or fewer if there aren't 3 matches)
  return sortedTasks.slice(0, 3);
}