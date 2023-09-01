import { useState } from "react";

const PostProject = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 5; // Set the total number of steps here

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col justify-evenly h-fit">
            <h2 className="font-normal text-xl">Step 1: Project Title</h2>
            <div className="flex flex-col">
              <label>Select Country</label>
              <select>
                <option>KENYA</option>
                <option>Tanzania</option>
                <option>Uganda</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Select Type of Service</label>
              <select>
                <option>Finance</option>
                <option>Management</option>
                <option>Accounting</option>
              </select>
            </div>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-purple-600 hover:bg-purple-800"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Project Description</h2>
            <div className="flex flex-col">
              <label>Name of the project</label>
              <input type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col">
              <label>What experience are you looking for</label>
              <select>
                <option>0-1 year</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>over 5 years</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Describe the project and what you want done</label>
              <textarea
                className="border-2 rounded-lg px-2 py-2"
                type="text"
                placeholder="Details"
              />
            </div>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-snow-100 hover:bg-purple-200"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-purple-600 hover:bg-purple-800"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Project Category</h2>
            <div className="flex flex-col">
              <label>How long should the project take</label>
              <input type="text" placeholder="Timeline" />
            </div>
            <div className="flex flex-col">
              <label>What is your budge</label>
              <select>
                <option>Below 5000</option>
                <option>5000 - 15000</option>
                <option>15000 - 35000</option>
                <option>35000 - 55000</option>
                <option>Over 55000</option>
              </select>
            </div>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-snow-100 hover:bg-purple-200"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-purple-600 hover:bg-purple-800"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Project Deadline</h2>
            <div className="flex flex-col">
              <label>Any additional information from the files uploaded</label>
              <input type="text" placeholder="Timeline" />
            </div>{" "}
            <div className="flex flex-col">
              <label>Upload any relevant files</label>
              <input type="file" />
            </div>{" "}
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-snow-100 hover:bg-purple-200"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-purple-600 hover:bg-purple-800"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5: Review and Confirmation</h2>
            <div>
              <p>Confrim all the details and submit</p>
            </div>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-snow-100 hover:bg-purple-200"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="w-1/5 rounded-lg border-2 py-2 px-4 bg-green-600 hover:bg-green-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // Add logic to send each piece of data individually
    // Example: Send project title, then project description, and so on
    console.log("Data sent successfully!");
  };

  return (
    <div className="grid place-items-center">
      <div className="mt-24 h-[80vh] w-2/3 border-2 rounded-lg">
        <h1 className="font-semibold text-xl text-center py-2">
          Post a Project
        </h1>
        <div className="border-b-2 mb-4 px-4 py-2">
          <div className="w-full h-2 bg-purple-200 rounded-full">
            <div
              className="h-2 bg-purple-700 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="py-4 px-4">{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default PostProject;
