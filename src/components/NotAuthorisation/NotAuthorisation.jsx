import { useLottie } from 'lottie-react';
import React from 'react'
import data from '../../assets/NotAuthorisation/NotAuthorisation.json'
import { Link } from 'react-router-dom';

const NotAuthorisation = () => {
  const options = {
    animationData: data,
    loop: true,
    style: {
      with: "400px",
      height: "300px",
    },
  };
  const {View} = useLottie(options)
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {View}
        <Link to={`/`} className={`bg-orange-500 p-2 m-5 w-3/12 text-center`}>Back to homepage</Link>
    </div>
  )
}

export default NotAuthorisation