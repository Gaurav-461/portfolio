
import { Link } from 'react-router'
import errorImage from '../assets/image/404_sad.svg'

const ErrorPage = () => {
  return (
    <section className='bg-primary w-full h-[100vh] text-white'>
      <div className='w-full h-full content-center'>
        <div className='flex-center'>
            <img 
                src={errorImage} 
                alt="404 Page not found" 
                width={250}
            />
        </div>

        <h1 className='text-center text-white text-3xl mt-4'>Page not found</h1>

        <p className='text-center mt-4 text-gray font-medium'>There may be a typing mistake in the address Or the page may 
            <br /> have been moved</p>

        <div className='text-center mt-6'>
            <Link to='/' >
                <p className='underline hover:text-gray'>GO TO HOME</p>
            </Link>
        </div>
        
      </div>
    </section>
  )
}

export default ErrorPage