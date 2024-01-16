import Link from 'next/link';

const page = () => {
  return (
    <div className='bg-white shadow-md rounded-md p-4'>
      <h2 className='text-xl font-bold mb-2'>The title</h2>
      <h3 className='text-md text-gray-600 mb-4'>Subtitle</h3>
      <h3 className='text-md text-gray-600 mb-4'>
        This is the main description of the bog
      </h3>
      <div>
        <button>
          <p className='bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md inline-block'>
            Delete
          </p>
        </button>
        <Link href="/edit/1">
          <p className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md inline-block'>
            Edit
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
