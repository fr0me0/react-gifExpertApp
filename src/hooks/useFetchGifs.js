import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGIfs = ( category ) => {

    const[state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {

        getGifs( category )
        
            .then( img => {
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    });
                }, 1500);
            });

    }, [ category ]);

    return state;

};