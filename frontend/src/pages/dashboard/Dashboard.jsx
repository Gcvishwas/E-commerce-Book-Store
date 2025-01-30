import React, { useEffect, useState } from 'react'
import axios from 'axios';
import getBaseUrl from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}}`,
                        'Content-Type': 'application/json'
                    }
                })

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);

            }
        }
        fetchData();
    }, []);

    if (loading) return <Loading />
    return (
        <div>

        </div>
    )
}

export default Dashboard
