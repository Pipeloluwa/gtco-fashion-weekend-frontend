"use client";
import { Input } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { IEmbeddedSource } from '../../client-components/home-components/HomeSegmentComponent8';

const YoutubeHighlightFormComponent = () => {
    const [inputField, setInputField]= useState<(string | null)>(null);

    useEffect(() => {
        const result:IEmbeddedSource= {
            source: "htttwfowfoeowffwesdfdjfbwjkefwefewfwefwefewfe"
        }

        setInputField(result.source);
    });

    return (
        <div className='w-[700px] mt-8'>
            <Input 
                value={inputField ? inputField : ""}
                onChange={e => setInputField(e.target.value)}
                label="Enter Youtube Source Embedded Link" type="text" 
                color='orange' size='lg'
                className='bg-white px-4 py-7 shadow-sm shadow-gray-300'
            />
        </div>
    );
}

export default YoutubeHighlightFormComponent;