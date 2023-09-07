import { useState, useEffect } from "react";
import axios from "axios";

const UpdateProfile = ({ user }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    avatar: null,
    bio: "",
    location: "",
    contactInfo: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("_id");

    if (!userId) {
      setIsLoading(false);
      return;
    }
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("contactInfo", formData.contactInfo);
      if (formData.avatar) {
        formDataToSend.append("avatar", formData.avatar);
      }

      const response = await axios.patch(
        `https://assist-api-okgk.onrender.com/api/v1/profile/${userId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setFormData({
          phone: "",
          avatar: null,
          bio: "",
          location: "",
          contactInfo: "",
        });
        setStep(1);
        // Handle success feedback
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto p-4">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Step 1: Update Basic Info
          </h2>
          <form onSubmit={nextStep}>
            <div className="mb-4">
              <label className="block mb-2">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Avatar:</label>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
            >
              Next
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Step 2: Update Bio and Location
          </h2>
          <form onSubmit={nextStep}>
            <div className="mb-4">
              <label className="block mb-2">Bio:</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </div>
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded mr-2 focus:outline-none"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
            >
              Next
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Step 3: Update Contact Info
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Contact Info:</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </div>
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded mr-2 focus:outline-none"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
            >
              Update Profile
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
