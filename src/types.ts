
// src/types.ts
export interface Task {
    text: string;
    personalities: string[];
  }
  
  export interface DataStructure {
    personalityTraits: string[];
    tasks: Task[];
  }
  