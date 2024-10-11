import React from 'react';

function MainRight({person}) {
  if (!person) {
    return (
      <div className="w-3/4 p-4">
        <p>Select a person to see their details.</p>
      </div>
    );
  }

  return (
    <div>
        <div className='pb-15'>
            {/* the first block */}
            <div className='bg-gray-50 border-y-[1px] border-gray-3000'>
                <div className=' px-10 py-9'>
                    <div className='flex justify-between items-center '>
                        <div>
                        <p className='text-2xl'>{person.title}</p>
                        <i class="bi bi-arrow-up-right"></i>
                        </div>
                        
                        <i class="fa-solid fa-ellipsis-vertical text-[23px] text-gray-500"></i>
                    </div>
                    <p className='text-gray-500 mt-2 text-xl-4xl'>{"Created By " + person.createdBy}</p>
                </div>

            </div>
            {/* the first block */}
            <div>
                    <div className='bg-gray-50 mx-10 my-8 rounded-xl shadow-sm shadow-slate-300 py-9'>
                        <div className='px-9'>
                            <button className='bg-gray-200 px-2  py-[2px] rounded text-[14px] mr-2 font-semibold'>Improvements</button>
                            <button className='bg-red-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-red-800'>Bug fix</button>
                            <button className='bg-green-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-green-800'>New</button>
                            <button className='bg-yellow-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-yellow-800'>Refactor</button>
                            <button className='bg-blue-100 px-2 py-[2px] rounded text-[14px] mr-2 font-semibold text-blue-800'>Maintainence</button>
                        </div>
                        <div className='px-9 mt-3'>
                                <p className='font-serif'>{person.description.slice(1,41)}</p>
                                 <br/>
                                <p className='font-serif'>{person.description.slice(41,150)}</p>
                                <br/>
                                <p className='font-serif'>{person.description.slice(100,400)}</p>
                                <br/>
                                <p className='font-serif'>{person.description.slice(400,600)}</p>
                        </div>
                    </div>

                    <div className='bg-gray-50 mx-10 mt-8 rounded-xl shadow-sm shadow-slate-300'>
                        <div className='px-9 py-8'>
                            <h2 className='text-xl font-serif'>Release tags</h2>
                            <div className='flex mt-3'>
                                <button className='bg-gray-200 px-2 py-1 rounded-md mr-2'>ios</button>
                                <button  className='bg-gray-200 px-2 py-1 rounded-md mr-2'>Android</button>
                                <button className='bg-gray-200 px-2 py-1 rounded-md mr-2'>Web</button>
                            </div>
                        </div>
                    </div>
                    <div className='px-9 mt-7 mb-7'>
                        


                            <div class="alert alert-primary border-transparent" role="alert">
                                <div className='flex justify-between'>
                                    <p>{person.name + " published this changelog on October 12, 2022"} </p>
                                    <div>
                                    <button>See Details </button>
                                    <i class="fa-solid fa-arrow-right ml-2"></i>
                                    </div>
                                </div>
                            
                            </div>
                            <div class="alert alert-secondary border-transparent mt-7" role="alert">
                            <div className='flex justify-between'>
                                    <p>{person.name + " created this draft on October 12, 2022"}</p>
                                    <div className=''>
                                        <button className='font-semibold hover:text-grey-200'>Continue Editing </button>
                                        <i class="fa-solid fa-arrow-right ml-2"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="alert alert-success border-transparent mt-7" role="alert">
                            <div className='flex justify-between '>
                                    <p>{person.name + " scheduled this changelog to be published on October 12, 2022"} </p>
                                    <div className='hover:text-green-600'>
                                    <button className='font-semibold '>Publish Now </button>
                                    <i class="fa-solid fa-arrow-right ml-2 "></i>
                                    </div>
                                </div>
                            </div>
                            <div class="alert alert-danger border-transparent mt-7" role="alert">
                            <div className='flex justify-between'>
                                    <p>{person.name + " archived this changelog on October 12, 2022" }</p>
                                    <div>
                                    <button>Unarchive</button>
                                    <i class="fa-solid fa-arrow-right ml-2"></i>
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
