import React from 'react'
import logo from '../assets/Logo.png'
import{BsFillTelephoneFill, BsFacebook, BsTwitter, BsReddit,BsInstagram } from 'react-icons/bs'
import{CiLocationOn} from 'react-icons/ci'
import{AiOutlineMail} from 'react-icons/ai'


const Footer = () => {
  return (
    <section className='w-full flex flex-col max-w-[1920px] mx-auto lg:px-20 bg-active pt-20 pb-10 px-3 text-white'>
        <div className='flex flex-col md:flex-row '>
            {/* left side */}
            <div className='max-w-[350px] flex flex-col'>
                <img src={logo} alt="logoFooter" className='mb-5 w-[200px] md:w-01' />
                <p className='text-[18px] leading-[33px] py-3'>Sed dignissim nisl pellentesque ut sed dapibus nam. Consectetur pellentesque nulla pretium, elit, elementum, sapien. Sit semper eget hendrerit.</p>
                <div className='flex flex-col'>
                    <p className='flex flex-row items-center justify-start p-1'><BsFillTelephoneFill/> +381 64 998 0214</p>
                    <p className='flex flex-row items-center justify-start p-1'><CiLocationOn/>Street Avenue 784, New York, USA</p>
                    <p className='flex flex-row items-center justify-start p-1'><AiOutlineMail/>contact@gmail.com</p>
                </div>
            </div>
            {/* right side */}
            <div className='flex flex-row w-full items-center justify-around mt-7 md:mt-0'>
                <div className='w-full md:w-auto'>
                    <h3 className='text-[20px] md:text-[26px] font-primary mb-2'>Quick Links</h3>
                    <ul className='flex flex-col'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Destination</li>
                        <li>Activities</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='w-full md:w-auto'>
                    <h3 className='text-[20px] md:text-[26px] font-primary mb-2'>Travellers</h3>
                    <ul className='flex flex-col'>
                        <li>Why Travellers</li>
                        <li>How it works</li>
                        <li>Why Choose Us</li>
                        <li>Customers Stories</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className='w-full md:w-auto'>
                    <h3 className='text-[20px] md:text-[26px] font-primary mb-2'>Terms & Condition</h3>
                    <ul className='flex flex-col'>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Copyright</li>
                        <li>Security</li>
                        <li>Fees & Change</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* copyright */}
        <div className='mt-5 py-5 border-t border-gray-700 '>
            <div className='flex flex-col md:flex-row  justify-between h-[100px] w-full'>
                {/* left / copyright */}
                <div className='flex flex-row'>
                    <p >© Copyrights 2021 Templates Jungle. Designed by <span className='font-semibold'>Templates Jungle.</span></p>
                </div>
                {/* right / socials */}
                <div>
                    <div className='flex flex-row items-center'>
                        <p className='font-semibold'>Social Links :</p>
                        <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer"><BsFacebook size={20} className='ml-4'/></a>
                        <a href="https://twitter.com/" target={'_blank'} rel="noreferrer"><BsTwitter size={20} className='ml-4'/></a>
                        <a href="https://www.reddit.com/" target={'_blank'} rel="noreferrer"><BsReddit size={20} className='ml-4'/></a>
                        <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer"><BsInstagram size={20} className='ml-4'/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer