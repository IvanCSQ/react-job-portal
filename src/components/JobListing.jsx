// rafce
import { useState } from 'react'
// npm i react-icons
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 80) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className='mb-6'>
                  <div className='text-gray-600 my-2'>
                    {job.type}
                  </div>
                  <h3 className='text-xl font-bold'>
                    { job.title }
                  </h3>
                </div>
                <div className='mb-5'>
                  { description }
                </div>

                <button
                  className='text-indigo-500 mb-5 hover:text-indigo-600'
                  // add event to button
                  // when button is clicked, setShowFullDescription will be called
                  // the value will switch from previous state to opposite previous state
                  onClick={ () => setShowFullDescription((prevState) => !prevState) }
                >
                  { showFullDescription ? 'Less' : 'More' }
                </button>

                <h3 className='text-indigo-500 mb-2'>
                  { job.salary } / Year
                </h3>
                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg-flex-row justify-between mb-4'>
                  <div className='text-orange-700 mb-3'>
                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                    { job.location }
                  </div>

                  <Link
                    to={`/jobs/${job.id}`}
                    className='bg-indigo-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-indigo-600'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default JobListing
