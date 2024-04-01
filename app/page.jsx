"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import Utility Functions
import randomNumber from '@/src/utils/randomNumber';
import getRandFile from '@/src/utils/getRandomFile';

// Import Components
import Sidebar from "@/src/components/organisms/Sidebar";
import Home from '@/src/components/templates/Home';

function page() {
    const [imageFilename, setImageFilename] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            const fileList = await getRandFile('public/img/');
            const totalChoices = fileList.length;
            const fileName = fileList[randomNumber(0, totalChoices - 1)];
            setImageFilename(fileName);
        }

        fetchImage();
    }, []);

    return (
        <div id="page-container" className="min-h-screen grid bg-no-repeat bg-cover">
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
