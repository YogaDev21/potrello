"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Home from '@/src/components/Home';

function page() {

    return (
        <div id="page-container" className="min-h-screen">
            <Image
                src={`/img/${imageFilename}`}
                fill={true}
                alt="background-image"
                className="fixed top-0 left-0 -z-10"
            />
            <div id="content-container" className="flex p-3">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default page;
