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
  {
    id: "4",
    title: "Item 4",
    content: "Lorem, ipsum dolor4.",
  },
];
function App() {
  return (
    <>
      <div className="tab-content">
        <div className="tab-content__header">
          <a href="#">Item one</a>
          <a href="#">Item two</a>
          <a href="#">Item three</a>
        </div>
        <hr />
        <div className="tab-content__content">
          <p>content</p>
        </div>
      </div>
    </>
  );
}

export default App;
