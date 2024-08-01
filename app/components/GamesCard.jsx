"use client";
import React, { useState, useEffect } from 'react';
import Rating from './Rating';
import { EyeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const GamesCard = ({ imgUrl, title, description, qualification, gameId, gameUrl, onEyeClick }) => {
    const [rating, setRating] = useState(qualification);

    // UseEffect para cargar la calificación inicial cuando se monta el componente
    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await fetch(`http://localhost:3000/video_games/`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener la calificación.');
                }

                const data = await response.json();
                setRating(data.averageRating);
                console.log('Promedio de calificaciones cargado:', data.averageRating);
            } catch (error) {
                console.error('Error al obtener la calificación:', error);
            }
        };

        fetchRating();
    }, [gameId]); // Dependencia de gameId para actualizar cuando cambie

    // Actualizar la calificación después de publicar una nueva calificación
    const handleRatingUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/ratings/average${gameId}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Error al obtener la calificación actualizada.');
            }

            const data = await response.json();
            setRating(data.averageRating);
            console.log('Promedio de calificaciones actualizado:', data.averageRating);
        } catch (error) {
            console.error('Error al obtener la calificación actualizada:', error);
        }
    };

    return (
        <div>
            <div
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <button
                        onClick={onEyeClick}
                        className='h-14 w-14 mr-4 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'
                    >
                        <EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </button>
                    <Link
                        href={gameUrl || '/fallback-url'}
                        className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'
                    >
                        <GlobeAltIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#adb7be]'>{description}</p>
                <p>Rating promedio: {rating}</p>
                <Rating gameId={gameId} onRating={handleRatingUpdate} />
            </div>
        </div>
    );
};

export default GamesCard;