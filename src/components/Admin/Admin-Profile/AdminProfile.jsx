// Updated AdminProfile.jsx with fallback dummy data if server is not responding
import React, { useState, useEffect } from "react";
import AdminProfileCard from "./AdminProfileCard";
import UserManagement from "./UserManagement";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AdminProfile = () => {
  const { userId } = useParams();

  const [adminInfo, setAdminInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BACKEND_URL}/api/admins/${userId}`);
          if (!response.ok) throw new Error("Server not responding");
          const data = await response.json();
          console.log("data: ", data)
          setAdminInfo(data);
      } catch (error) {
        console.error("Error fetching admin profile:", error);
        setError(true);
        // setAdminInfo(dummyAdminData);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminInfo();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/admins/admin-profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminInfo),
      });
      if (!response.ok) throw new Error("Failed to save data");
      const updatedData = await response.json();
      setAdminInfo(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving admin profile:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Admin Profile</h2>
        <div>
          <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md font-medium transition">
            Export Settings
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-2 ml-4 rounded-md font-medium transition"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              onClick={handleSaveChanges}
              className="text-green-600 bg-green-100 hover:bg-green-200 px-4 py-2 ml-4 rounded-md font-medium transition"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminProfileCard isEditing={isEditing} adminInfo={adminInfo} />
        <UserManagement adminInfo={adminInfo}/>
      </div>
    </div>
  );
};

export default AdminProfile;
