import React, {useState} from 'react';
import {IoIosCloseCircle} from "react-icons/io";
import AddUserModal from "../Components/AddUserModal.jsx";
import AddTutorModal from "../Components/AddTutorModal.jsx";

const KarateControl = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (

       !modalIsOpen ?  <div>
           KarateControl

           <ul>
               karateeeeeee
           </ul>

           <button
               onClick={() => setModalIsOpen(true)}
           >
               Add Tutorial
           </button>

       </div> :  <div
           className='w-full h-screen  fixed z-10 top-0 left-0 flex justify-center items-center'
       >

           <div
               className='relative w-[100%] h-[100vh]'
           >



               <button
                   className='absolute top-3 right-2 p-1 border-none'
                   onClick={()=>setModalIsOpen( false)}
               >
                   <IoIosCloseCircle
                       size={25}
                   />
               </button>
               <AddTutorModal/>
           </div>


       </div>
    );
};

export default KarateControl;