import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
    return(
        <>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className="text-[#9d6f20] text-[40px] font-semibold font-['inter'] m-4">Because Every Newborn Deserves a Healthy Start</div>
            <div className='flex justify-around items-start w-full'>
                <div className='text-[#333333] m-4'>
                    <div className='w-3/4'>
                    Welcome to our Jaundice Prediction Platform – designed to provide proactive care for newborns through advanced technology. Our AI-driven solution offers early detection insights, helping parents and caregivers take swift, informed action. With a focus on user-friendly design and reliable health data, we’re here to support you in safeguarding your baby’s health journey. Discover how predictive insights can make a difference in newborn care.
                    </div>
                    <button className="w-[120px] h-[50px] bg-gradient-to-b from-[#ff6b6b] to-[#e36767] rounded-[15px] shadow-lg font-semibold text-[#333333] m-4 transition-transform duration-300 hover:scale-105">Get Started</button>
                </div>
                <div className='w-[500px] h-[300px] bg-zinc-300 rounded-l-full'></div>

            </div>
        </div>
        </>
    );
};

export default Home;