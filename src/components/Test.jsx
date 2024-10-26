import React, { useState } from 'react'
const tabData = [
  {
    id: "1",
    title: "Item 1",
    content: "Lorem, ipsum dolor1.",
  },
  {
    id: "2",
    title: "Item 2",
    content: "Lorem, ipsum dolor2.",
  },
  {
    id: "3",
    title: "Item 3",
    content: "Lorem, ipsum dolor3.",
  },
];
const Test = () => {
  // const activeTab = 3;
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(2);
  const [counter, setCounter] = useState(0);
  const handleActive = (id) => {
    setActiveTab(id);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Show</button>
      {isOpen && (
        <div className="tab-content">
          <div className="tab-content__header">
            {tabData.map((tab) => (
              <button
                onClick={() => handleActive(tab.id)}
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <hr />
          <div className="tab-content__content">
            <p>
              {tabData[activeTab - 1].content} - {counter}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Test