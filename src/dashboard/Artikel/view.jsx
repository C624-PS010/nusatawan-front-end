import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar.jsx"

const viewArtikel = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <section className="p-20">
          <div className="flex justify-between mb-4">
              <h1 className="text-3xl font-bold">Detail Artikel</h1>
              <Link to="/Artikel">
                <button
                  type="button"
                  className="font-semibold text-white border bg-red-600 border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 text-center"
                >
                  Back
                </button>
              </Link>
          </div>
          <div className='bg-white p-5 border rounded-md shadow-md w-full'>
            <div className='grid grid-cols-2 w-full'>
              {/* Image */}
              <div>
                <img src="" 
                    alt="" 
                />
              </div>
              {/* Detail */}
              <div>
                <ul className="pt-10">
                  <li className='font-semibold'>Title : <span className='font-normal'> MASUKIN API </span></li>
                  <li className='font-semibold'>Date : <span className='font-normal'> MASUKIN API </span></li>
                  <li className='font-semibold'>Author : <span className='font-normal'> MASUKIN API </span></li>
                  <li className='font-semibold'>Category : <span className='font-normal'> MASUKIN API </span></li>
                </ul>
              </div>
            </div>
            {/* Content */}
            <div className=' pt-10'>
              <h1 className='text-lg font-bold'>Description</h1>
              <p className='text-justify'>MASUKIN API Content</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default viewArtikel
