import React from "react";
import { useState } from "react";

const FeatureInput = ({ setValue, featuresField }) => {
  const [features, setFeatures] = useState(featuresField || []); // Initialize with existing features or empty array
  const [inputValue, setInputValue] = useState(""); // store current input

  // function to add new feature
  const addFeature = () => {
    //checks to see if empty or existing
    if (inputValue.trim() && !features.includes(inputValue)) {
      const updatedFeatures = [...features, inputValue]; // adding new feature to list
      setFeatures(updatedFeatures);
      setInputValue("");

      setValue("features", updatedFeatures);
    }
  };

  // handles "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    }
  };

  // remove
  const handleRemove = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index); // get index
    setFeatures(updatedFeatures); // update state

    setValue("features", updatedFeatures);
  };

  return (
    <div className="featureInput text-gray-900">
      <div className="field flex mb-2">
        <input
          type="text"
          value={inputValue} // bind to state
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          id="acc-feature"
          name="acc-feature"
          placeholder="eg. 2 single beds"
          className="border rounded py-2 px-3 focus:border-gray-400 w-full"
        />
      </div>
      <ul className="flex flex-wrap">
        {features.map((feature, index) => (
          <li
            key={index}
            className="border rounded-lg bg-gray-300 py-1 px-2 items-center mr-2 mb-1"
          >
            {feature}
            <button
              type="Button"
              onClick={() => handleRemove(index)}
              className="rounded-3xl bg-gray-700 px-2 text-gray-100 ml-3 text-xs"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureInput;
