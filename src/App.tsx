// Updated src/App.tsx with all components
import { useState, useEffect } from 'react';
import data from './assets/nasty_tasks_200_unique.json';
import { matchTasks } from './utils/matchTasks';
import { DataStructure, Task } from './types';
import PersonalitySelector from './components/PersonalitySelector';
import TaskDisplay from './components/TaskDisplay';
import PersonalityInsights from './components/PersonalityInsights';
import './App.css';

function App() {
  const [allData, setAllData] = useState<DataStructure | null>(null);
  const [selectedPersonalities, setSelectedPersonalities] = useState<string[]>([]);
  const [matchedTasks, setMatchedTasks] = useState<Task[]>([]);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    setAllData(data as DataStructure);
  }, []);

  useEffect(() => {
    if (allData && selectedPersonalities.length > 0) {
      const matches = matchTasks(selectedPersonalities, allData.tasks);
      setMatchedTasks(matches);
    } else {
      setMatchedTasks([]);
    }
  }, [selectedPersonalities, allData]);

  const handlePersonalityToggle = (personality: string) => {
    setSelectedPersonalities(prev => {
      if (prev.includes(personality)) {
        return prev.filter(p => p !== personality);
      } else {
        return [...prev, personality];
      }
    });
  };

  if (!allData) return <div className="loading">Loading...</div>;

  return (
    <div className="app-container">
      <header>
        <h1>Farewell Task Helper</h1>
        <p>pick and choose themes for your seniors farewell tasks</p>
        <p>When you're done spreading smiles 🎭, send your heartfelt slams 💌 to them at <h2><a href='https://scene.net.in/'>scene.net.in</a></h2></p>
      </header>

      <main>
        <div className="left-column">
          <PersonalitySelector 
            personalities={allData.personalityTraits}
            selectedPersonalities={selectedPersonalities}
            onTogglePersonality={handlePersonalityToggle}
          />
          
          {selectedPersonalities.length > 0 && (
            <PersonalityInsights 
              selectedPersonalities={selectedPersonalities}
              tasks={allData.tasks}
            />
          )}
        </div>
        
        <div className="right-column">
          <TaskDisplay matchedTasks={matchedTasks} />
        </div>
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Farewell Bakchodi</p>
      </footer>
    </div>
  );
}

export default App;