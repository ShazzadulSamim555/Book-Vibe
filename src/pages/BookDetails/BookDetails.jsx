import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}= useParams();

    const data= useLoaderData();
    console.log(data);
    console.log(id);
    return (
        <div>
            <h1>Book Details</h1>
        </div>
    );
};

export default BookDetails;