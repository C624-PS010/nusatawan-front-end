import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar.jsx"

const viewCampaign = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <section className="p-20">
          <div className="flex justify-between mb-4">
              <h1 className="text-3xl font-bold">Detail Campaign</h1>
              <Link to="/Campaign">
                <button
                  type="button"
                  className="font-semibold text-white border bg-red-600 border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 text-center"
                >
                  Back
                </button>
              </Link>
          </div>
          <div className='bg-white p-5 border rounded-md shadow-md w-full flex flex-wrap justify-between'>
            <div className='grid grid-cols-2 gap-10'>
              <div>
                <img src="./public/img/logo.jpg" alt="" />
            </div>
            <div>
              {/* Title */}
              <h1 className='font-bold text-lg'>Title : <span className='font-normal'>API</span></h1>
              {/* Content */}
              <h1 className='text-lg font-bold pb-2'>Description : </h1>
              <p className='font-normal text-justify'>Masukin API Content disini</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default viewCampaign
