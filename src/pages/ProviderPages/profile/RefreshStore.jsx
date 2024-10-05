import { setProductOwner } from '../../../app/UserInfo';
import { setStoreData } from '../../../app/storeDataSlice';
import toast from 'react-hot-toast';
import axios from 'axios';

// Fetch stores from the backend and check if the current user owns a store
export const fetchStores = async ({ setLoading, dispatch, params, user }) => {
  try {
    const response = await axios.get('/api/v1/stores/stores');
    const stores = response.data.stores;

    // Check if the current user owns a store
    const userStore = stores.find(store => String(store.provider_id) === params.userId);
    const owningStore = stores.find(store => store.provider_id === user?.userId);

    if (userStore && owningStore) {
      dispatch(setProductOwner(true)); // Update Redux store to reflect product owner
      dispatch(setStoreData(owningStore)); // Store the user's store data
    } else if (!owningStore && userStore) {
      dispatch(setProductOwner(false)); // Not an owner but associated with a store
      dispatch(setStoreData(userStore)); // Store the user store data
    } else {
      dispatch(setProductOwner(false)); // User does not own or associate with any store
    }
  } catch (error) {
    console.log('Error fetching data:', error.response || error.message); // Log the full error
    toast.error('Failed to reload the page.');
  } finally {
    setLoading(false); // Set loading to false after data is fetched or if an error occurs
  }
};
