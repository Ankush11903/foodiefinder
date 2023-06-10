import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <button onClick={toggleForm}>Edit Profile</button>
      {isEditing && (
        <div id="profileForm">
          <h2>Edit Profile</h2>
          <form>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Enter your height"
              className="input-field"
            />
            <br />

            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              className="input-field"
            />
            <br />

            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="input-field"
            />
            <br />

            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" className="input-field">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="activeness">Activeness:</label>
            <select id="activity" name="activity" className="input-field">
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

            <label htmlFor="bodyGoal">Body Goal:</label>
            <input
              type="text"
              id="bodyGoal"
              name="bodyGoal"
              placeholder="Enter your body goal"
              className="input-field"
            />
            <br />

            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
