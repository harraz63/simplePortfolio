/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export default function Footer() {
  return (
    <>
      <div>
        <div>
          <div className="grid md:grid-cols-3 bg-[#2C3E50] py-pySection px-8">
            <div className="p-2 text-center flex flex-col gap-2 m-4 text-white">
              <h3 className='uppercase font-[500] text-[28px]'>location</h3>
              <p>2215 John Daniel Drive</p>
              <p className='mt-2'>Clark, MO 65243</p>
            </div>

            <div className="p-2 text-center flex flex-col gap-2 m-4 text-white">
              <h3 className='uppercase font-[500] text-[28px]'>around the web</h3>
              <div className="space-x-2">
                <FontAwesomeIcon className='border-[1px] p-[10px] rounded-full' icon={faFacebook} />
                <FontAwesomeIcon className='border-[1px] p-[10px] rounded-full' icon={faTwitter} />
                <FontAwesomeIcon className='border-[1px] p-[10px] rounded-full' icon={faLinkedinIn} />
                <FontAwesomeIcon className='border-[1px] p-[10px] rounded-full' icon={faGlobe} />
              </div>
            </div>

            <div className="p-2 text-center flex flex-col gap-2 m-4 text-white">
              <h3 className='uppercase font-[500] text-[28px]'>about freelancer</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className='text-center bg-[#1a252f] text-white p-6'>
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  )
}
