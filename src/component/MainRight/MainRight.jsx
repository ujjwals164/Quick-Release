import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useSelector } from 'react-redux';


function MainRight({ onClose }) {
    const selected = useSelector((state) => state.changeLog.selectedPerson);
    
    const isSmallDevice = useMediaQuery('only screen and (max-width: 768px)');
    const isMediumDevice = useMediaQuery('only screen and (min-width: 769px) and (max-width: 992px)');
    const isLargeDevice = useMediaQuery('only screen and (min-width: 993px) and (max-width: 1200px)');
    const isExtraLargeDevice = useMediaQuery('only screen and (min-width: 1201px)');
  
    if (!selected) {
        return (
            <div className="w-3/4 p-4">
                <p>Select a person to see their details.</p>
            </div>
        );
    }

    let className = '';
    if (isSmallDevice || isMediumDevice) {
        className = 'w-full h-screen fixed top-32 pb-36 left-0 bg-gray-200 overflow-y-auto';
    } else if (isLargeDevice || isExtraLargeDevice) {
        className = 'pb-36';
    }

    return (
        <div>
            <div className={` ${className}`}>
                {/* the first block */}
                <div className='bg-gray-50 border-y-[1px] border-gray-300'>
                    <div className='px-10 py-4'>
                        <div className='flex lg:hidden mb-2 text-[30px]'>
                            <i className="fa-solid fa-left-long" onClick={onClose}></i>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-2xl'>{selected.title}</p>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                            <i className="fa-solid fa-ellipsis-vertical text-[23px] text-gray-500"></i>
                        </div>
                        <p className='text-gray-500 mt-2 text-xl'>{"Created By " + selected.name}</p>
                    </div>
                </div>

                {/* the second block */}
                <div>
                    <div className='bg-gray-50 mx-10 my-8 rounded-xl shadow-sm shadow-slate-300 py-9 cursor-pointer'>
                        <div className='px-9'>
                            <button className='bg-gray-200 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold'>Improvements</button>
                            <button className='bg-red-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-red-800'>Bug fix</button>
                            <button className='bg-green-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-green-800'>New</button>
                            <button className='bg-yellow-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-yellow-800'>Refactor</button>
                            <button className='bg-blue-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-blue-800'>Maintenance</button>
                        </div>
                        <div className='px-9 mt-3'>
                                <p className='font-serif'>{selected.description.slice(1,41)}</p>
                                 <br/>
                                <p className='font-serif'>{selected.description.slice(41,150)}</p>
                                <br/>
                                <p className='font-serif'>{selected.description.slice(100,400)}</p>
                                <br/>
                                <p className='font-serif'>{selected.description.slice(400,600)}</p>
                        </div>
                    </div>

                    <div className='bg-gray-50 mx-10 mt-8 rounded-xl shadow-sm shadow-slate-300'>
                        <div className='px-9 py-8'>
                            <h2 className='text-xl font-serif'>Release tags</h2>
                            <div className='flex mt-3'>
                                <button className='bg-gray-200 px-2 py-1 rounded-md mr-2'>iOS</button>
                                <button className='bg-gray-200 px-2 py-1 rounded-md mr-2'>Android</button>
                                <button className='bg-gray-200 px-2 py-1 rounded-md mr-2'>Web</button>
                            </div>
                        </div>
                    </div>

                    <div className='px-9 mt-7 mb-7'>
                        <div className="alert alert-primary border-transparent" role="alert">
                            <div className='flex justify-between'>
                                <p>{selected.name + " published this changelog on October 12, 2022"}</p>
                                <div>
                                    <button>See Details</button>
                                    <i className="fa-solid fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-secondary border-transparent mt-7" role="alert">
                            <div className='flex justify-between'>
                                <p>{selected.name + " created this draft on October 12, 2022"}</p>
                                <div>
                                    <button className='font-semibold hover:text-grey-200'>Continue Editing</button>
                                    <i className="fa-solid fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-success border-transparent mt-7" role="alert">
                            <div className='flex justify-between'>
                                <p>{selected.name + " scheduled this changelog to be published on October 12, 2022"}</p>
                                <div className='hover:text-green-600'>
                                    <button className='font-semibold'>Publish Now</button>
                                    <i className="fa-solid fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-danger border-transparent mt-7" role="alert">
                            <div className='flex justify-between'>
                                <p>{selected.name + " archived this changelog on October 12, 2022"}</p>
                                <div>
                                    <button>Unarchive</button>
                                    <i className="fa-solid fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainRight;
