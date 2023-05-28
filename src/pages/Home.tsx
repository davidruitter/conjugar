import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedTense, setSelectedTense] = useState('');

  const handleTenseSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTense(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Spanish Conjugation Practice</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg font-medium mb-4">Select a tense to practice:</p>
        <select
          value={selectedTense}
          onChange={handleTenseSelect}
          className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">-- Select a Tense --</option>
          <option value="present">Present Tense</option>
          {/* <option value="preterite">Preterite Tense</option>
          <option value="imperfect">Imperfect Tense</option> */}
          {/* Add more options for other tenses */}
        </select>
        {
          <Link to={`/practice/${selectedTense}`}>
            <button
                disabled={selectedTense === '' ? true : false}
              className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto disabled:bg-gray-500"
            >
              Start Practice
            </button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Home;