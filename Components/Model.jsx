"use client";
import globalContext from '@/context/context';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { IoClose } from 'react-icons/io5';

const Model = ({ modelIsOpen, setModelIsOpen }) => {

    const { modelData } = useContext(globalContext);

    const handleCloseModel = () => {
        setModelIsOpen(false);
    }

    if (!modelIsOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="flex gap-5">
                <div className='dark:bg-bdark bg-white max-w-[50rem] w-full max-h-[90vh] overflow-y-auto p-5 dark:text-gray-200 rounded-sm'>
                    <Image src={modelData?.thumbnail} unoptimized={true} width={100} height={100} alt='project-img' className='w-full rounded-lg' />
                    <div className='flex lg:flex-row flex-col gap-5'>
                        <div className='lg:w-[70%] w-full font-[EuroStyle Normal]'>
                            <div className='mt-5'>
                                <p className='text-3xl font-sans mb-2'>{modelData?.name}</p>
                                <p className='text-sm'>{modelData?.category}</p>
                            </div>
                            <div>
                                <p className='mt-8'>{modelData?.summary}</p>
                            </div>
                            <ul className='list-disc mx-10 mt-3'>
                                {
                                    modelData?.features.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                            <p>{modelData?.conclusion}</p>
                        </div>
                        <div className='flex flex-col gap-5  mt-5'>
                            <div>
                                <h4 className='mb-2'>Github Repo</h4>
                                <Link href={modelData?.codeLink} className="underline text-sm" target='_blank'>Codebase</Link>
                            </div>
                            <div>
                                <h4 className='mb-2'>Live at</h4>
                                <Link href={modelData?.liveLink} className="underline text-sm" target='_blank'>{modelData?.liveHostName}</Link>
                            </div>
                            <div>
                                <h4 className='mb-2'>Category</h4>
                                <p className='text-sm font-extralight'>{modelData?.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <IoClose size={40} className='text-black bg-white p-1.5 border-2 border-accent rounded-md hover:rounded-full' onClick={handleCloseModel} />
            </div>
        </div>
    )
}

export default Model;