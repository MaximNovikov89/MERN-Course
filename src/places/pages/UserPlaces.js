import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg',
        adress: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg',
        adress: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
]
const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces} />

    )
}

export default UserPlaces
