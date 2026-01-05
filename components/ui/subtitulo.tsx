import React from 'react';

 type Props = {
        subtitle: string;
    }

export default function Subtitulo({subtitle}:Props){
    return(
        <>
        <h2 className='text-black font-bold pb-4 text-lg '>{subtitle}</h2>
        </>    
        )
}