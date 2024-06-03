'use client';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Sidebar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const barsRef = useRef<HTMLDivElement>(null);

    const handleOnClick = () => {
        if (barsRef.current) {
            setIsModalVisible((prevState) => !prevState);
        }
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="container relative h-screen flex flex-col">
            <section className="absolute w-full flex flex-row justify-between bg-blue-950">
                <div className="sidebar-container">
                    <div className="logo m-2">
                        <Image
                            src={"/dnhsLogo.png"}
                            alt="logo"
                            width={70}
                            height={70}
                        />
                    </div>
                </div>

                {/* bars */}
                <div className="bars w-4 mt-4 mr-4 text-white hover:opacity-50" ref={barsRef} onClick={handleOnClick}>
                    <FontAwesomeIcon 
                    icon={faBars}
                    />
                </div>
            </section>

            {isModalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
                        <p className="mb-4">This is a modal content.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;