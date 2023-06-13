import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="profile-container relative bg-gray-100 py-8 px-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mb-4 cursor-pointer" onClick={toggleDropdown}>
          Your Profile
        </h1>
        {showDropdown && (
          <div className="dropdown absolute right-0 mt-2 bg-white rounded shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Notifications</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={toggleForm}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>
      {isEditing && (
        <div id="profileForm" className="mt-4">
          <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
          <form>
          {/* <form> */}
            <label htmlFor="height" className="mb-2 block">
              Height:
            </label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Enter your height"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            />

            <label htmlFor="weight" className="mb-2 block">
              Weight:
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            />

            <label htmlFor="age" className="mb-2 block">
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            />

            <label htmlFor="gender" className="mb-2 block">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="activeness" className="mb-2 block">
              Activeness:
            </label>
            <select
              id="activity"
              name="activity"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            >
              <option value="">Select</option>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="lightly_active">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderately_active">
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="very_active">
                Very active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="extra_active">
                Extra active (very hard exercise/sports & physical job or 2x training)
              </option>
            </select>

            <label htmlFor="bodyGoal" className="mb-2 block">
              Body Goal:
            </label>
            <input
              type="text"
              id="bodyGoal"
              name="bodyGoal"
              placeholder="Enter your body goal"
              className="input-field w-full py-2 px-4 border border-gray-300 rounded mb-4"
            />

            <button
              type="submit"
              className="save-button bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
