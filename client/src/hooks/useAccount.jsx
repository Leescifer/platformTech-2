import axiosInstance from '../lib/axios';
import { useState } from 'react';

const useAccount = () => {
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchAccount = async () => {

        setLoading(true);
        setError(null);

        try {
            const res = await axiosInstance.get('/auth/register');
            setAccount(res.data.data);
        } catch (error) {
            console.error('Error fetching account:', error);
            setError(error.response ? error.response.data : 'Network error');
        } finally {
            setLoading(false);
        }
    }

    return {
        account,
        error,
        loading,
        fetchAccount
    };
};

export default useAccount;  
