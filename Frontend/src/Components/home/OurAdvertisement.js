import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const OurAdvertisement = () => {

    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/Advertising');
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>

        </div>
    )
}

export default OurAdvertisement
