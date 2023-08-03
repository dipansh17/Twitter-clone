
import Image from 'next/image'
import {BsTwitter,BsBell,BsEnvelope,BsBookmark} from 'react-icons/bs'
import {BiHomeCircle,BiHash,BiUser,BiMoney} from 'react-icons/bi'
import {Inter} from 'next/font/google';
import {SlOptions} from "react-icons/sl"
import FeedCard from '@/components/FeedCard';

const inter =Inter({subsets:['latin']});

interface TwitterSidebarButton{
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems:TwitterSidebarButton[]=[
  {
    title:'Home',
    icon: <BiHomeCircle/>
  },
  {
    title:'Explore',
    icon: <BiHash/>
  },
  {
    title:'Notifications',
    icon: <BsBell/>
  },
  {
    title:'Messages',
    icon: <BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon: <BsBookmark/>
  },
  {
    title:'Twitter Blue',
    icon: <BiMoney/>
  },
  {
    title:'Profile',
    icon: <BiUser/>
  },
  {
    title:'More Options',
    icon: <SlOptions/>
  },
 
]
export default function Home() {
  return (
   <div className={inter.className}>
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3  pt-1 ml-28'>
        <div className='text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all'>
        <BsTwitter />
        </div>
        <div className='mt-1 text-xl  pr-4 '>
          <ul>
          {sidebarMenuItems.map(item => <li className='flex justify-start items-center gap-4  hover:bg-gray-800 rounded-2xl  w-fit cursor-pointer px-3 py-3 mt-3' key={item.title}>
            <span className='text-3xl'>{item.icon}</span>
            <span>{item.title}</span>
          </li>)}
          </ul>
          <div className='mt-5 px-3'>
          <button className='bg-[#1d9bf0]  text-lg font-semibold px-4 py-2 rounded-full  w-full'>Tweet</button>
          </div>
        </div>
      </div>
      <div className='col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>

      <div className='col-span-3'></div>
    </div>
   </div>
  )
}
