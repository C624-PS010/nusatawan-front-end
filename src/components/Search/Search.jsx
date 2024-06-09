
import { FaSearch } from 'react-icons/fa';
import { MdSort, MdCategory } from 'react-icons/md';

const SearchBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 p-4 bg-slate-200 bg-opacity-30 rounded-md shadow-xl w-auto lg:w-full max-w-4xl">
            <div className="relative w-full md:w-auto lg:pr-48">
                <input
                    type="text"
                    placeholder="Cari Wisata..."
                    className="px-10 py-2 pl-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative w-full md:w-auto">
                <select className="px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                    <option value="" disabled selected>Sort by</option>
                    <option value="option2">Option 1</option>
                </select>
                <MdSort className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative w-full md:w-auto">
                <select className="px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                    <option value="" disabled selected>Kategori</option>
                    <option value="optionB">Option 1</option>
                </select>
                <MdCategory className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
      </div>
    )
}

export default SearchBar
