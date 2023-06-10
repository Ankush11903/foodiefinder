import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PersonalDetailsForm() {
  const [isVegetarian, setIsVegetarian] = useState(false);

  const handleVegetarianChange = (e) => {
    setIsVegetarian(e.target.checked);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
       <form className="max-w-md p-6 bg-white rounded shadow">
        <label className="block mb-2 font-bold" htmlFor="height">
          Height (in cm):
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded"
          type="number"
          id="height"
          name="height"
          required
        />

        <label className="block mb-1 font-bold" htmlFor="weight">
          Weight (in kg):
        </label>
        <input
          className="w-full px-3 py-1 mb-4 border rounded"
          type="number"
          id="weight"
          name="weight"
          required
        />

        <label className="block mb-1 font-bold" htmlFor="age">
          Age:
        </label>
        <input
          className="w-full px-3 py-1 mb-4 border rounded"
          type="number"
          id="age"
          name="age"
          required
        />

        <label className="block mb-1 font-bold" htmlFor="gender">
          Gender:
        </label>
        <select
          className="w-full px-3 py-1 mb-2 border rounded"
          id="gender"
          name="gender"
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="flex items-center mb-4">
          <input
            className="mr-2"
            type="checkbox"
            id="vegetarian"
            name="vegetarian"
            checked={isVegetarian}
            onChange={handleVegetarianChange}
          />
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>

        <label className="block mb-2 font-bold" htmlFor="activity">
          Activity Level:
        </label>
        <select
          className="w-full px-3 py-2 mb-4 border rounded"
          id="activity"
          name="activity"
          required
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

        <label className="block mb-2 font-bold" htmlFor="goal">
          Body Goal:
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded"
          type="text"
          id="goal"
          name="goal"
          required
        />

        <Link to="/" ><input
          className="w-full px-6 py-3 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 cursor-pointer"
          type="submit"
          value="Submit"
        /></Link>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
