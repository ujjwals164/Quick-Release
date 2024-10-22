import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import MainLeft from '../../component/MainLeft/MainLeft';

import MainRight from '../../component/MainRight/MainRight';
import { useNavigate } from 'react-router-dom';
import leftData from '../../Data/Data'
// import { useHistory } from 'react-router-dom';

import { setOpen, setSelectedPerson } from './ChangeLogSlice';



function ChangeLog({isAuthenticated  ,setIsAuthenticated}) {
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  
  // useEffect(
  //   (

  //   )=>{
  //     if (!isAuthenticated) {
  //       navigate('/login');
  //       return null; // Return null while redirecting
  //   }
  //   },[]
  // )

  const handleLogout = () => {
      setIsAuthenticated(false);
      navigate('/login');
  };




  // const [selectedPerson, setSelectedPerson] = useState(null);
  
  // const [ open ,setOpen] = useState(false)

  // const [datas , setDatas] = useState(null)
  // const dispatch = useDispatch()
//   useEffect(()=>{
//    const response = async ()=>{
//      try {
//        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
//        setDatas(resp.data)
//      } catch (error) {
//        console.log("error is their" , error)
//      }
     
//    } 
//    response();
//  },[])

 
 



  
  
  
  const handlePersonClick = () => {
    dispatch(setOpen(true))
  };
  const handleButtonChange = ()=>{
     navigate('/change-log/new')
  }

  const handleModelChange = ()=>{
    setOpen(false)
    setSelectedPerson(null)
  }
 
  return (
    <>
      
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>

      
      <div className='fixed top-[50px] z-40 w-full bg-white'>
        <div className='flex justify-between items-center px-9 py-3'>
          <h2 className='text-3xl font-serif text-black'>Change Logs</h2>
          <button className='bg-blue-700 text-white px-5 py-2 rounded-md' onClick={handleButtonChange}>Add New</button>
        </div>
      </div>

      
      <div className='mt-[75px]'> 
        <div className='w-[400px] border-r-[1px] border-gray-300 overflow-y-auto fixed h-full hidden lg:flex'>
          <MainLeft people={leftData} onClick={handlePersonClick} />
        </div>

        {/* responsive code */}
        
        <div className="mt-3 px-5 bg-gray-100 fixed top-28 inset-0 h-full overflow-y-auto border rounded lg:hidden ">
             <MainLeft people={leftData}  onClick={()=> setOpen(true)} />
        </div>
              
        

       
        <div className='ml-[400px] fixed overflow-y-auto h-full pb-96  hidden w-full lg:flex '>
          <div className='w-[160vh]'>
           <MainRight />
          </div>
          
        </div>
        <div className=' flex lg:hidden'>
         <MainRight open={open}  onClose={handleModelChange} />
      </div>

      </div>    
     
    </>
  );
}

export default ChangeLog;
