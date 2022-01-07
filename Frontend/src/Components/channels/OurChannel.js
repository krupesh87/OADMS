import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const OurChannel = () => {

    let history = useHistory();

    useEffect(() => {
       if(localStorage.getItem('token')){
           history.push('/channels');
       }
       else{
           history.push('/login');
       }
       // eslint-disable-next-line
    }, [])

    return (
        <>

        </>
    )
}

export default OurChannel
