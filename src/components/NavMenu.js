import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillQuestionSquare } from 'react-icons/bs'
import { FaFillHeart, FaShoppigCart } from 'react-icons/fa'

const style = {
    wrapper: 'flex justify-between cursor-pointer items-center h-10 w-full fixed z-10',
    logoWrap: 'bg-red-600 h-auto p-4 ',
    logo: 'text-[#fafafa] px-2  text-xs bg-transparent  rounded-full font-bold border-2 border-[#fafafa]'
}

const NavMenu = () => {
  return <>
        <div className={style.wrapper}>
            <div className='flex items-center'>
            <div className={style.logoWrap}>
          <span className={style.logo}>Nintendo</span>
      </div>
      <div className='flex ml-6 px-2 py-2 cursor-pointer bg-transparent hover:text-red-600 items-center border-b-2 border-[#0000000de]'>
      <AiOutlineSearch size={25} />
      <input type='text' placeholder='Search games, hardware news etc' className='w-72 cursor-pointer hover:place-holder-red-600 k focus:border-none  bg-transparent px-4 outline-none outline-0 hover:placeholder:text-red-600 placeholder:text-gray-500' />
      </div>
            </div>
      
     <div className='flex space-x-6 items-center'>
        <div className='flex text-sm  hover:text-red-600 cursor-pointer space-x-4'>
            <FaFillHeart size={25} />
            <h2>Support</h2>
        </div>
     
     </div>
  </div>
  </>;
};
export default NavMenu;
