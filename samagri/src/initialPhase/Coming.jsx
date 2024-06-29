import React from 'react'
import LogoImg from './logo.png'
import CoverImg from './coverImg.png'
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Email from './Email'
const Coming = () => {
  return (
    <div>
    <div className="bg-white w-full shadow-lg">
        <img src={LogoImg} alt="Logo" className="w-[6rem] mx-auto" />
    </div>
    <div className="h-[auto]">
        <img src={CoverImg} alt="Cover Image" />
    </div>
    <div className="text-center w-full mt-[70px]">
        <h1 className='text-4xl sm:text-6xl font-medium mt-10 text-[#ff9900] uppercase tracking-widest'>Who we are?</h1>
        <p className='text-lg sm:px-0 px-3 sm:text-center text-justify mt-4 text-gray-600 max-w-screen-xl mx-auto'>
            We are <b>SAMAGRI</b>. SAMAGRI is a one stop solution for all your religious ceremonies. We are committed to provide you with the most authentic SAMAGRI in the best possible manner.
            The packages has been curated consulting the pandits from culturally significant cities and believed to be best in following the religious rituals.
            Presenting Samagri, the spiritual story of your, mine and our homes.
            <img src={LogoImg} alt="" className='w-40 mx-auto'/>
        </p>
        <div className="bg-gray-200 p-[1px] my-5"></div>
        <h1 className='text-3xl sm:text-4xl font-medium mt-10 text-[#ff9900] uppercase tracking-widest'>Swagatam Yajmaan!</h1>
        <p className='text-lg justified mt-4 text-gray-600 mx-auto px-3'>
        Sign up now and get 10% off at 'Subharambh'
            <Email/>
        </p>
        <div className="flex justify-center gap-10 text-xl">
            <a href="https://www.facebook.com/share/pR5cqw8hEjttyXEM/?mibextid=qi2Omg" target='_blank'>
            <FacebookIcon fontSize='large' style={{fill: '#1877F2'}}/>
            </a>
            <a href="https://www.instagram.com/samagrii.202?utm_source=qr&igsh=djdnNnU5Ym51OGtu" target='_blank'>
            <InstagramIcon fontSize='large' style={{fill: '#E1306C'}}/>
            </a>
            
        </div>
    </div>
    <div className="footer bg-[#FFE600] mt-20 py-6 px-9 text-sm text-center">
        COPYRIGHT © 2024 सामग्री  - ALL RIGHTS RESERVED.
    </div>
    </div>
  )
}

export default Coming