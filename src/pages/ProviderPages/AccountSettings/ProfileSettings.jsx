import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearStoreData, selectStoreData } from '../../../app/storeDataSlice';
import toast from 'react-hot-toast';
import { selectCurrentUser } from '../../../app/UserInfo';
import PageLoading from '../../../components/reusable/PageLoading';

const ProfileSettings = () => {
  
  const storeData = useSelector(selectStoreData); // Assuming the store ID is available here
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false); // State to manage deletion loading
  const [loading, setLoading] = useState(false); // State to manage loading
  const user = useSelector(selectCurrentUser);
  const storeId = storeData?.store_id;
  const token = user.token;

  const [profile, setProfile] = useState({
    storeName: storeData.store_name,  // Example of pre-filled data
    bio: storeData.store_bio || '',
    location: storeData.store_location,
    socialMedia: storeData.social_media_accounts,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile({
      ...profile,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('store_name', profile.storeName)
    data.append('store_bio', profile.bio)
    data.append('store_location', profile.location)
    data.append('social_media_accounts', profile.socialMedia)

    console.log(data)
    try {
      const response = await axios.put(`/api/v1/stores/update-store/${storeId}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Add the token here
        },
      });
      console.log(response);
      toast.success("Store data updated successfully")
      setLoading(false)
    } catch(err) {
      console.log(err);
      toast.error("unable to update store data , try again ")
      setLoading(false);
    }

    
    // Submit logic
    console.log('Profile updated:', profile);
  };

  const handleDeleteStore = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your store?");
    if (confirmed) {
      try {
        setDeleting(true);
        // Make DELETE request to the API
        const response = await axios.delete(`/api/v1/stores/delete-store/${storeId}`, {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,  // Add the token here
          },
        });
        console.log('Store deleted:', response.data);
        dispatch(clearStoreData());
        // Handle successful deletion (e.g., redirect user or show success message)
        alert("Store has been successfully deleted.");
      } catch (error) {
        console.log('Error deleting store:', error);
        toast.error("Failed to delete the store. Please try again.");
      } finally {
        setDeleting(false);
      }
    } else {
      // Deletion was canceled
      console.log("Store deletion canceled.");
    }
  };

  return (
    <>
      {loading && <PageLoading />}
      { !storeId ? 
      (
        <div className='text-xl flex justify-center items-center -mt-32 h-screen'>You have No store. Go to your profile and create one.</div>
      ) 
      :
      (
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Store Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Store Name */}
            <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
              <label className="block text-sm font-semibold md:ml-1">Store Name</label>
              <input
                type="text"
                name="storeName"
                placeholder="Store Name"
                value={profile.storeName}
                onChange={handleChange}
                required
                className="w-[70%] px-4 py-2 border rounded-md md:w-full"
              />
            </div>
  
            {/* Bio */}
            <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
              <label className="block text-sm font-semibold md:ml-1">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-[70%] px-4 py-2 border rounded-md md:w-full"
                placeholder="Tell us a little about yourself"
              />
            </div>
  
            {/* Location */}
            <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
              <label className="block text-sm font-semibold md:ml-1">Location</label>
              <select
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                required
                className="w-[70%] px-4 py-2 border rounded-md md:w-full"
              >
                <option value="White Nile state">White Nile state</option>
                <option value="Atbara">Atbara</option>
                <option value="Port Sudan">Port Sudan</option>
                <option value="Kasala">Kasala</option>
                <option value="Shendy">Shendy</option>
              </select>
            </div>
  
            {/* Social Media Account */}
            <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
              <label className="block text-sm font-semibold md:ml-1">Store Media Account</label>
              <input
                type="text"
                name="socialMedia"
                placeholder="Social Media Account (facebook, twitter, etc)"
                value={profile.socialMedia}
                onChange={handleChange}
                className="w-[70%] px-4 py-2 border rounded-md md:w-full"
              />
            </div>
  
            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button type="submit" className="px-4 py-2 bg-[#ff7a57] text-white rounded hover:bg-[#f86642]">
                Save Changes
              </button>
  
              {/* Delete Store Button */}
              <button
                type="button"
                onClick={handleDeleteStore}
                className={`px-4 py-2 text-white rounded ${deleting ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500'}`}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete Store'}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProfileSettings;
