import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`); // Replace with the correct address of your FastAPI server
        const result = await response.json();
        console.log(process.env.REACT_APP_API_URL)
        console.log(result)
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(`Data: ${data}`)
  console.log(process.env.REACT_APP_API_URL)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <h1>DevOps Scraper</h1>
      <div className="cards">
        {data.map((result, index) => (
          <Card
            key={index}
            darkMode={darkMode}
            title={result.article_title}
            postLink={result.article_dev_to_link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
