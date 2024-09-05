import React, { useState } from "react";
import axiosInstance from "../Components/Axios"; 

function Plans() {
  const strategyChoices = [
    { value: "offensive", label: "Offensive" },
    { value: "defensive", label: "Defensive" },
    { value: "neutral", label: "Neutral" },
  ];

  const objectiveChoices = [
    { value: "disrupt", label: "Disrupt" },
    { value: "influence", label: "Influence" },
    { value: "monitor", label: "Monitor" },
  ];

  const targetAudienceChoices = [
    { value: "public", label: "General Public" },
    { value: "military", label: "Military" },
    { value: "political", label: "Political" },
  ];

  const [strategy, setStrategy] = useState(strategyChoices[0].value);
  const [objective, setObjective] = useState(objectiveChoices[0].value);
  const [target_audience_analysis, setTargetAudience] = useState(targetAudienceChoices[0].value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      strategy,
      objective,
      target_audience_analysis: target_audience_analysis,
    };

    try {
      const response = await axiosInstance.post("/api/plans/", payload);
      console.log("Data submitted successfully:", response.data);
      // Handle successful submission (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-red-500 text-2xl mb-4">Plans</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Strategy</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
          >
            {strategyChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Objective</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          >
            {objectiveChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Target Audience</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={target_audience_analysis}
            onChange={(e) => setTargetAudience(e.target.value)}
          >
            {targetAudienceChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Plans;
