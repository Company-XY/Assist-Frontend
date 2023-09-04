import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OnboardingSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Step 1: Profile Creation",
      description:
        "VAs are guided to complete their profile by adding a profile photo, bio, and contact information. They showcase their skills, areas of expertise, and years of experience. VAs can upload samples of their previous work as part of their portfolio. They set their pricing structure for different types of work (hourly, project-based, retainers).",
    },
    {
      title: "Step 2: Task Preferences",
      description:
        "VAs select the service categories they specialize in, such as Admin Support, Marketing, or Customer Service. They specify their availability for different work arrangements (hourly, project-based, retainers).",
    },
    {
      title: "Step 3: Task Bidding",
      description:
        "VAs browse tasks posted by clients in their chosen service categories. When they find a suitable task, they submit a bid by providing a detailed proposal and estimated cost. The platform encourages them to engage in messaging with clients to clarify project details.",
    },
    {
      title: "Step 4: Task Completion and Reviews",
      description:
        "If their bid is accepted, VAs begin working on the task. They maintain communication with the client through the platform's messaging system. Upon task completion, they submit deliverables to the client through the platform. The client rates and reviews their performance, which contributes to building their reputation.",
    },
    {
      title: "Step 5: Earnings and Payments",
      description:
        "For milestone-based tasks, VAs have to wait for client approval of each milestone before payment. Payments are released to their account upon milestone approval.",
      isLastStep: true, // Indicate this is the last step
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("done");
  };

  return (
    <div className="p-4 mt-24">
      <Link to="/dashboard">
        <span className="hover:underline">Return to Dashboard</span>
      </Link>
      <h1 className="text-2xl font-semibold mb-4">
        {steps[currentStep - 1].title}
      </h1>
      <p>{steps[currentStep - 1].description}</p>
      <div className="mt-6">
        {currentStep > 1 && (
          <button
            onClick={handlePrevStep}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-4"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length && (
          <button
            onClick={handleNextStep}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Next
          </button>
        )}
        {steps[currentStep - 1].isLastStep && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-4"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingSteps;
