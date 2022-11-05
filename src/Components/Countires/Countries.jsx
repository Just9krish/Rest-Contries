import React from 'react';
import useFetch from '../../Hooks/useFetch';

const Countries = () => {
    const {data, error, isLoading} = useFetch("https://restcountries.com/v3.1/all")
    console.log(data);
    return (
        <div>
            
        </div>
    );
}

export default Countries;
