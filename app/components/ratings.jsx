"use client"
import React, { useState } from 'react';

const Rating = ({ gameId, onRating }) => {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingClick = async (rating) => {
        setSelectedRating(rating);
        try {
            const response = await fetch('http://localhost:3000/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    value: rating,
                    videoGameId: gameId,
                    userId: 1, // Reemplaza con el ID del usuario autenticado
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la calificación.');
            }

            const data = await response.json();
            console.log('Calificación enviada:', data);

            // Llama a onRating para actualizar la calificación promedio
            if (onRating) {
                onRating();
            }
        } catch (error) {
            console.error('Error al enviar la calificación:', error);
        }
    };

    return (
        <div>
            <p>Califica este juego:</p>
            {[0, 1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    style={{
                        cursor: 'pointer',
                        color: selectedRating >= star ? 'gold' : 'gray',
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;