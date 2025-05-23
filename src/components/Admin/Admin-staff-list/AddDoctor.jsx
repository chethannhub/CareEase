import React, { useState } from 'react';

const AddDoctor = ({ onAddDoctor }) => {
  const [doctor, setDoctor] = useState({
    profile: '',
    name: '',
    specialization: '',
    email: '',
    days: [false, false, false, false, false, false, false],
    assignedTreatment: '',
    type: 'Part-Time',
    experience: '',
    language: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({ ...prevDoctor, [name]: value }));
  };

  const handleDayToggle = (index) => {
    setDoctor((prevDoctor) => {
      const newDays = [...prevDoctor.days];
      newDays[index] = !newDays[index];
      return { ...prevDoctor, days: newDays };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the language string into an array (splitting by commas)
    const languageArray = doctor.language
      .split(',')
      .map((lang) => lang.trim())
      .filter((lang) => lang !== '');
    const newDoctor = { ...doctor, language: languageArray };

    onAddDoctor(newDoctor);

    // Reset the form state
    setDoctor({
      profile: '',
      name: '',
      specialization: '',
      email: '',
      days: [false, false, false, false, false, false, false],
      assignedTreatment: '',
      type: 'Part-Time',
      experience: '',
      language: '',
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={doctor.specialization}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Assigned Treatment</label>
          <input
            type="text"
            name="assignedTreatment"
            value={doctor.assignedTreatment}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Type</label>
          <select
            name="type"
            value={doctor.type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">Experience</label>
          <input
            type="text"
            name="experience"
            value={doctor.experience}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Languages (comma separated)</label>
          <input
            type="text"
            name="language"
            value={doctor.language}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Working Days</label>
          <div className="flex space-x-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDayToggle(index)}
                className={`w-8 h-8 rounded-full ${
                  doctor.days[index]
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-semibold">Profile Picture URL</label>
          <input
            type="text"
            name="profile"
            value={doctor.profile}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
