"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import Components
import Home from '@/components/Home';

// Import Images
import Background from '@/public/img/anime-background-2.jpg';

function page() {
    return (
        <div id="page-container" className="min-h-screen w-full">
            <Image
                src={Background}
                fill={true}
                alt="background-image"
                className="fixed top-0 left-0 -z-10 bg-cover brightness-50"
            />
            <Home />
        </div>
    );
}

export default page;
