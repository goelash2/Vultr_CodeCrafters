import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faRobot, faChartBar } from '@fortawesome/free-solid-svg-icons';

const fList = [
    {
        id: 1,
        title: "Clear, Visual Results",
        icon: faChartBar,
        disc: "Risk levels are displayed with intuitive visuals and color-coded insights, making it easy to understand and act on the information.", 
    },
    {
        id: 2,
        title: "AI-Powered Chatbot Assistance",
        icon:  faRobot,
        disc:  "Our intelligent chatbot, powered by Laravel, provides instant responses to common questions, guides users through the form, and offers insights on jaundice and newborn care.", 
    },
    {
        id: 3,
        title: "Downloadable Reports",
        icon:  faDownload,
        disc:  "Generate downloadable reports to share with healthcare providers, helping you take proactive steps in newborn care.", 
    },
]
const FeaturePanel = ({title,icon,disc}) => {
    return(
        <>
        <div>
            <div className='flex justify-center items-center h-[250px] w-[300px] bg-gradient-to-b from-[#f4b5a1] to-[#ec9393] rounded-[15px] shadow-lg text-[#333333] transition-transform duration-300 hover:scale-105'>
                <div className='flex flex-col justify-center items-center align-middle m-2'>
                    <div className='text-lg font-semibold mb-2'>{title}</div>
                    <div className='h-[70px] w-[70px] flex justify-center items-center'><FontAwesomeIcon className='h-[60px] w-[60px]' icon={icon} /></div>
                    <div className='text-sm h-[100px] mt-2'>{disc}</div>
                </div>
            </div>
        </div>
        </>
    );
};
export default function Feature(){
    return(
        <div>
            <h1 className="w-48 h-[51px] text-[#333333] text-[40px] font-normal font-['Inter'] m-3">Features</h1>
            <div className='justify-center items-center gap-[10vw] flex flex-wrap'>
                {fList.map((fEle) =>(
                    <FeaturePanel
                     key = {fEle.id}
                     title={fEle.title}
                     icon={fEle.icon}
                     disc={fEle.disc}
                     
                    />
                ))}
                
            </div>
            
        </div>
    )
};