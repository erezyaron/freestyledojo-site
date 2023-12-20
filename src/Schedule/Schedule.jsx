import { useState, useEffect } from "react";
import calendarData from "./schedule.json";
import "./schedule.css";

const WeeklyCalendar = () => {
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [uniqueTags, setUniqueTags] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState(calendarData); // Initialize with all classes
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipClick = (index) => {
    setActiveTooltip(index === activeTooltip ? null : index);
  };

  const Tooltip = ({ children, text, isVisible, onClick }) => {
    return (
      <div onClick={onClick}>
        {children}
        {isVisible && <div className="tooltip">{text}</div>}
      </div>
    );
  };


  useEffect(() => {
    const tags = new Set();
    Object.values(calendarData).forEach(dayEvents => {
      dayEvents.forEach(event => {
        event.tags.forEach(tag => tags.add(tag));
      });
    });
    setUniqueTags([...tags]);
  }, []);

  const toggleTag = (tag) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };
  useEffect(() => {
    if (selectedTags.size === 0) {
      setFilteredClasses(calendarData);
    } else {
      const filtered = {};
      Object.entries(calendarData).forEach(([day, events]) => {
        filtered[day] = events.filter(event =>
          event.tags.some(tag => selectedTags.has(tag))
        );
      });
      setFilteredClasses(filtered);
    }
  }, [selectedTags]);
  return (
    <>
      <div className="filter-container">
        {uniqueTags.map((tag, index) => (
          index % 3 === 0 && (
            <div key={tag} className="tag-column">
              {uniqueTags.slice(index, index + 3).map(tag => (
                <label key={tag}>
                  <input
                    type="checkbox"
                    checked={selectedTags.has(tag)}
                    onChange={() => toggleTag(tag)}
                  />
                  {tag}
                </label>
              ))}
            </div>)
        ))}
      </div>
      <div className="schedule-container">
        {Object.entries(filteredClasses).map(([day, classes]) => (
          <div key={day} className="day-schedule">
            <h3>{day}</h3>
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="class-entry"
              >
                <Tooltip text={classItem.description} isVisible={activeTooltip === (day + index)}
                  onClick={() => handleTooltipClick(day + index)}>
                  <h4>{classItem.title}</h4>
                  <div className="subtitle">{classItem.subtitle}</div>
                  {classItem.startTime && classItem.endTime && (
                    <p>
                      {classItem.startTime} - {classItem.endTime}
                    </p>
                  )}

                  {/* Additional details */}
                </Tooltip>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default WeeklyCalendar;
