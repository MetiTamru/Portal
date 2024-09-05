import React, { useState } from 'react';
import axiosInstance from '../Components/Axios'; // Import the axios instance

function Prepares() {
  // Define choices for each field
  const narrativeChoices = [
    { value: "positive", label: "Positive" },
    { value: "negative", label: "Negative" },
    { value: "neutral", label: "Neutral" },
  ];

  const contentChoices = [
    { value: "text", label: "Text" },
    { value: "video", label: "Video" },
    { value: "image", label: "Image" },
  ];

  const legitimacyChoices = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const microtargetChoices = [
    { value: "demographics", label: "Demographics" },
    { value: "behavioral", label: "Behavioral" },
    { value: "geographical", label: "Geographical" },
  ];

  const channelChoices = [
    { value: "social_media", label: "Social Media" },
    { value: "news", label: "News" },
    { value: "blogs", label: "Blogs" },
  ];

  const affordanceChoices = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  // State hooks for form fields
  const [narrative, setNarrative] = useState(narrativeChoices[0].value);
  const [content, setContent] = useState(contentChoices[0].value);
  const [legitimacy, setLegitimacy] = useState(legitimacyChoices[0].value);
  const [microtarget, setMicrotarget] = useState(microtargetChoices[0].value);
  const [channels, setChannels] = useState(channelChoices[0].value);
  const [affordance, setAffordance] = useState(affordanceChoices[0].value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      narrative,
      content,
      legitimacy,
      microtarget,
      channels,
      affordance,
    };

    try {
      const response = await axiosInstance.post("/api/prepares/", payload);
      console.log("Data submitted successfully:", response.data);
      // Handle successful submission (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-red-500 text-2xl mb-4">Prepare</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Narrative</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={narrative}
            onChange={(e) => setNarrative(e.target.value)}
          >
            {narrativeChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Content</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          >
            {contentChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Legitimacy</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={legitimacy}
            onChange={(e) => setLegitimacy(e.target.value)}
          >
            {legitimacyChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Microtarget</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={microtarget}
            onChange={(e) => setMicrotarget(e.target.value)}
          >
            {microtargetChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Channels</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={channels}
            onChange={(e) => setChannels(e.target.value)}
          >
            {channelChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Affordance</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={affordance}
            onChange={(e) => setAffordance(e.target.value)}
          >
            {affordanceChoices.map((option) => (
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

export default Prepares;
