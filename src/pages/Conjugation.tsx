import { useState } from "react";
import Card from "../components/Card";

const Conjugation = () => {
  const [conjugation, setConjugation] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Spanish Conjugation Practice</h1>
      <Card>
        <p className="text-lg font-medium mb-4">Yo (conjugar)</p>
        <input
          type="text"
          value={conjugation}
          onChange={(e) => setConjugation(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </Card>
    </div>
  );
};

export default Conjugation;
