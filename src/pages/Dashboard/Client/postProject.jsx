import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostProject = () => {
  const prServices = [
    "Brand Messaging",
    "Crisis Management",
    "Event Planning",
    "Influencer Outreach",
    "Media Relations",
    "Press Release Writing",
    "Social Media Management",
    "Strategic Communication",
    "Content Creation",
    "Reputation Management",
    "Community Engagement",
    "Digital Marketing",
    "Market Research",
    "Publicity Campaigns",
    "Thought Leadership",
  ];
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [filteredServices, setFilteredServices] = useState(prServices);

  const handleServiceSelect = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = prServices.filter((service) =>
      service.toLowerCase().includes(query)
    );
    setFilteredServices(filtered);
    setSelectedService(query); // This will update the input field with the selected value
  };

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
            <h2 className="font-normal text-xl">Step 1: Service Selection</h2>
            <div className="flex flex-col mb-4">
              <label>Select Country</label>
              <select className="border-2 border-purple-800 rounded-lg h-10">
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Uganda</option>
                <option>Rwanda</option>
                <option>Ethiopia</option>
                <option>Zambia</option>
                <option>Burundi</option>
                <option>South Africa</option>
                <option>Botswana</option>
                <option>Namibia</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="prService">Select or Search PR Service:</label>
              <input
                className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4"
                type="text"
                id="prService"
                placeholder="Search or Select..."
                value={selectedService}
                onChange={handleSearch}
              />
              <select
                className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4 my-2"
                id="prServiceSelect"
                value={selectedService}
                onChange={handleServiceSelect}
              >
                {filteredServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-1/5 rounded-lg border-2 mt-5 py-2 px-4 bg-purple-600 hover:bg-purple-800"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Task Details</h2>
            <div className="flex flex-col mb-4">
              <label>Name of the project</label>
              <input
                className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>What experience are you looking for</label>
              <select className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4">
                <option>0-1 year</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>over 5 years</option>
                <option>Any</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label>Describe the project and what you want done</label>
              <textarea
                className="border-2 rounded-lg py-2border-2 border-purple-800 h-40 py-2 px-4"
                type="text"
                placeholder="Details..."
              />
            </div>
            <button
              className="w-1/5 rounded-lg border-2 mx-4 py-2 px-4 bg-snow-100 hover:bg-purple-200"
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
            <h2>Step 3: Budget and Timeline</h2>
            <div className="flex flex-col mb-4">
              <label>How long should the project take (Days)</label>
              <input
                className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4"
                type="Number"
                placeholder="Timeline"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>What is your budge</label>
              <select className="border-2 border-purple-800 rounded-lg h-10 py-2 px-4">
                <option>Below 5000</option>
                <option>5000 - 15000</option>
                <option>15000 - 35000</option>
                <option>35000 - 55000</option>
                <option>Over 55000</option>
              </select>
            </div>
            <button
              className="w-1/5 rounded-lg border-2 mx-4 py-2 px-4 bg-snow-100 hover:bg-purple-200"
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
            <h2>Step 4: Additional Information</h2>
            <div className="flex flex-col mb-4">
              <label>Any additional information from the files uploaded</label>
              <input
                className="border-2 border-purple-800 rounded-lg h-14 py-2 px-4"
                type="text"
                placeholder="Addditional inforamtion..."
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Upload any relevant files</label>
              <input
                className="border-2 border-purple-800 rounded-lg h-12 py-2 px-4"
                type="file"
              />
            </div>{" "}
            <button
              className="w-1/5 rounded-lg border-2 mx-4 py-2 px-4 bg-snow-100 hover:bg-purple-200"
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
    console.log("Data sent successfully!");
  };

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="grid place-items-center">
      <div className="mt-24 h-[80vh] w-2/3 border-2 rounded-lg">
        <h1 className="font-semibold text-xl text-center py-2">
          Post a Project
        </h1>
        <h2 className="ml-4 cursor-pointer" onClick={handleGoBack}>
          <span className="font-bold">Go Back</span> To Dashboard
        </h2>
        <div className="border-b-2 mb-4 px-4 py-2">
          <div className="w-full h-2 bg-purple-200 rounded-full">
            <div
              className="h-2 bg-purple-700 rounded-full mt-5"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="py-4 px-4 w-full">{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default PostProject;
