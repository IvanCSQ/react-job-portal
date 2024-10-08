// import jobs from '../jobs.json'; // removed due to json server setup
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ( { isHome = false }) => {
  // const recentJobs = jobs.slice(0, 3);
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;

  const [jobs, setJobs] = useState([]);
  // for loading effect
  const [loading, setLoading] = useState(true);

  // to have empty array as second argument to run only once
  useEffect(() => {
    // declare async function called fetchJobs to fetch data from server
    const fetchJobs = async () => {
      try {
        // try to make a request to the server
        const res = await fetch('http://localhost:8000/jobs');
        // parse the response into json format and store it in data variable
        const data = await res.json();
        // update state with the fetched jobs data
        setJobs(data);
      } catch (error) {
        // if error occur during fetch request, log the error
        console.log('Error fetching jobs', error);
      } finally {
        // once the request is completed (whether succeeded or failed)
        // stop the loading state
        setLoading(false);
      }
    }
    // invoke the fetchJobs function to fetch data when the component mounts
    fetchJobs();
  },[]);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text center'>
          { isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
          { loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              { jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          ) }

      </div>
    </section>
  )
};
export default JobListings
