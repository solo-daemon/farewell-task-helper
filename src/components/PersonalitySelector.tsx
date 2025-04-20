interface PersonalitySelectorProps {
    personalities: string[];
    selectedPersonalities: string[];
    onTogglePersonality: (personality: string) => void;
  }
  
  function PersonalitySelector({ 
    personalities, 
    selectedPersonalities, 
    onTogglePersonality 
  }: PersonalitySelectorProps) {
    return (
      <div className="personality-selector">
        <h2>Select Personality Traits</h2>
        <div className="personality-grid">
          {personalities.map(personality => (
            <button
              key={personality}
              className={`personality-button ${selectedPersonalities.includes(personality) ? 'selected' : ''}`}
              onClick={() => onTogglePersonality(personality)}
            >
              {personality}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default PersonalitySelector;