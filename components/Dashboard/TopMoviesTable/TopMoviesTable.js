'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopMoviesTable = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/video')
      .then(res => {
        const sortedMovies = res.data.sort((a, b) => b.view - a.view);
        // Set the top 5 movies based on view
        setTopMovies(sortedMovies.slice(0, 5));
      })
      .catch(error => {
        console.error('Error fetching top movies:', error);
      });
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <div className="block w-full  overflow-x-auto max-w-xl border">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Top Movies
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Total Views
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                Views
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {topMovies.map(movie => (
              <tr key={movie._id} className="text-gray-100">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">{movie.title}</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-100 whitespace-nowrap p-4">
                  {movie.view}
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">30%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-cyan-600 h-2 rounded-sm" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopMoviesTable;
