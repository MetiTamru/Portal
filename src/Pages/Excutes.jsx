import React, { useState } from 'react';
import axiosInstance from '../Components/Axios'; // Import the axios instance

function Executes() {
  // Define choices for each field
  const pumpPrimingChoices = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const contentDeliveryChoices = [
    { value: "scheduled", label: "Scheduled" },
    { value: "real_time", label: "Real-Time" },
  ];

  const exposureMaximizationChoices = [
    { value: "viral", label: "Viral" },
    { value: "organic", label: "Organic" },
    { value: "paid", label: "Paid" },
  ];

  const onlineHarmsChoices = [
    { value: "trolling", label: "Trolling" },
    { value: "fake_news", label: "Fake News" },
    { value: "phishing", label: "Phishing" },
  ];

  const offlineActivityChoices = [
    { value: "protests", label: "Protests" },
    { value: "rallies", label: "Rallies" },
    { value: "campaigns", label: "Campaigns" },
  ];

  // State hooks for form fields
  const [pumpPriming, setPumpPriming] = useState(pumpPrimingChoices[0].value);
  const [contentDelivery, setContentDelivery] = useState(contentDeliveryChoices[0].value);
  const [exposureMaximization, setExposureMaximization] = useState(exposureMaximizationChoices[0].value);
  const [onlineHarms, setOnlineHarms] = useState(onlineHarmsChoices[0].value);
  const [offlineActivity, setOfflineActivity] = useState(offlineActivityChoices[0].value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      pump_priming: pumpPriming,
      content_delivery: contentDelivery,
      exposure_maximization: exposureMaximization,
      online_harms: onlineHarms,
      offline_activity: offlineActivity,
    };

    try {
      const response = await axiosInstance.post("/api/executes/", payload);
      console.log("Data submitted successfully:", response.data);
      // Handle successful submission (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-red-500 text-2xl mb-4">Execute</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Pump Priming</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={pumpPriming}
            onChange={(e) => setPumpPriming(e.target.value)}
          >
            {pumpPrimingChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Content Delivery</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={contentDelivery}
            onChange={(e) => setContentDelivery(e.target.value)}
          >
            {contentDeliveryChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Exposure Maximization</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={exposureMaximization}
            onChange={(e) => setExposureMaximization(e.target.value)}
          >
            {exposureMaximizationChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Online Harms</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={onlineHarms}
            onChange={(e) => setOnlineHarms(e.target.value)}
          >
            {onlineHarmsChoices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Offline Activity</label>
          <select
            className="block w-full mt-1 border border-gray-300 rounded-md"
            value={offlineActivity}
            onChange={(e) => setOfflineActivity(e.target.value)}
          >
            {offlineActivityChoices.map((option) => (
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

export default Executes;
