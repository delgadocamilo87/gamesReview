import React from 'react';
import { GlobeAltIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export const GamesCard = ({ imgUrl, title, description, gameUrl, previewUrl, onEyeClick }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link
                        onClick={onEyeClick}
                        href={gameUrl}
                        className='h-14 w-14 mr-4 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'
                    >
                        <EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link
                        href={previewUrl}
                        className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'
                    >
                        <GlobeAltIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className=' text-[#adb7be]'>{description}</p>
            </div>
        </div>
    )
}

export default GamesCard
