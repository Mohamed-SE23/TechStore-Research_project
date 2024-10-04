import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TimeLine from './TimeLine';
import RenderProfileContent from './RenderProfileContent';
import { selectProductOwner, setProductOwner } from '../../../app/UserInfo';
import CreateStore from './CreateStore';
import { selectCurrentUser } from '../../../app/UserInfo'; // Import current user selector
import axios from 'axios';
import PageLoading from '../../../components/reusable/PageLoading';
import { selectStoreData, setStoreData } from '../../../app/storeDataSlice';

const Profile = () => {
  const [haveStore, setHaveStore] = useState(false); // Default to false
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const dispatch = useDispatch();
  const POwner = useSelector(selectProductOwner);
  const currentUser = useSelector(selectCurrentUser); // Get current user info from Redux store
  const storeData = useSelector(selectStoreData)
  const params = useParams();

    // Fetch stores from the backend and check if the current user owns a store
    const fetchStores = async () => {
      try {
        const response = await axios.get('/api/v1/stores/stores');

        const stores = response.data.stores;
        console.log(response.data.stores)
        // Check if the current user owns a store
        const userStore = stores.find(store => store.provider_id === params.userId);
        const owningStore = stores.find(store => store.provider_id === currentUser.userId);
        console.log(userStore)
        if (userStore) {
          dispatch(setStoreData(userStore)); // Store the user store data
        } else if(owningStore) {
          setHaveStore(true); // User owns a store
          dispatch(setStoreData(owningStore)); // Store the user store data
          dispatch(setProductOwner(true)); // Update Redux store to reflect product owner
        } else {
          setHaveStore(false); // User does not own a store
        }
      } catch (error) {
        console.log('Error fetching stores:', error.response || error.message); // Log the full error
        setError('Failed to fetch store data. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if an error occurs
      }
    };

    useEffect(() => {
      fetchStores();
  }, []);

  if (loading) {
    // While loading, render a loading state or spinner
    return <PageLoading />;
  }

  if (error) {
    // If an error occurred, display the error message
    return <div className="text-red-600 flex items-center justify-center h-screen">{error}</div>;
  }

  return (
    <>
      {!haveStore && POwner ? (
        <CreateStore /> // Render CreateStore if the user doesn't have a store
      ) : 
        (haveStore || !POwner) ? (
        <div className="bg-gray-100">
          {storeData && (
            <TimeLine
              StoreName={storeData.store_name}
              bio={storeData.store_bio}
              inner_img={storeData.inner_image_url}
              outer_img={storeData.outer_image_url}
              store_id={storeData.store_id}
              user={currentUser}
            />
          )}
          <RenderProfileContent 
                storeData={storeData} />
        </div>
      ) : ""}
    </>
  );
};

export default Profile;
