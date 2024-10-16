import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
     <div className='lg:w-full  bg-gray-100 rounded-lg p-4 '>
        <div className='w-full justify-center mb-4 order-1 sm:order-2 '>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
            className='rounded-xl h-[224px] w-full'/>
        </div>
        <h2 className='text-xl font-bold h-10'>{title}</h2>
     </div>
    </Link>
  )
}

export default PostCard