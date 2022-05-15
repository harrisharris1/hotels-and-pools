import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../store/SearchContext';
import Rooms from '../Cities/index';

function BookingSteps() {
    const [data, dispatch] = useContext(SearchContext);
    const path = useLocation();

    useEffect(() => {

        if (data.step === 1 && data.finished) {
            dispatch({
                type: 'changeSearch',
                payload: {
                    extra: [],
                    room: {},
                    finished: false
                }
            });
        }
    }, []);

    return (
        <>
            <section className='mb-5 mt-5 ml-2'>
                <h1>Hotels & Rates</h1>
                <p>Plan your perfect stay at our hotels</p>
                <img src={`/images/book-steps-${data.step}.png`} alt='' className='booking-step' />
            </section>
            <Rooms />
        </>
    )
}

export default BookingSteps;
