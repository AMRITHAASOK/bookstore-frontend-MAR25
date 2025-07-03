import React from "react";
import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { Card } from "flowbite-react";
function AllBooks() {
  return (
    <div>
      <Header />
      <h1 className="text-center mt-40 text-4xl font-bold">Collections</h1>
      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <div className="mt-2">
              <div className="flex justify-between items-center ms-100 rounded-md    bg-amber-100 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className=" shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  Book Name :{" "}
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="janesmith"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
                <button className="bg-amber-950 p-3 rounded text-amber-100 flex">
                  Search <CiSearch className="text-2xl font-extrabold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
  <div class="w-64 flex-none p-10">
    <h1 className="text-3xl my-4">Filters</h1>
          <div className="mb-3">
            <input type="radio" id="Literary Fiction"  name="filter" className="me-2"/>
            <label htmlFor="Literary Fiction">Literary Fiction</label>
          </div>
          <div className="mb-3">
            <input type="radio" id="Philosophy"  name="filter" className="me-2"/>
            <label htmlFor="Philosophy">Philosophy</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="Romance"  name="filter" className="me-2"/>
            <label htmlFor="Romance">Romance</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="Horror"  name="filter" className="me-2"/>
            <label htmlFor="Horror">Horror</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="Auto/Biography"  name="filter" className="me-2"/>
            <label htmlFor="Auto/Biography">Auto/Biography</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="Self-Help"  name="filter" className="me-2"/>
            <label htmlFor="Self-Help">Self-Help</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="Politics"  name="filter" className="me-2"/>
            <label htmlFor="Politics">Politics</label>
          </div>
           <div className="mb-3">
            <input type="radio" id="No-filter"  name="filter" className="me-2"/>
            <label htmlFor="No-filter">No-filter</label>
          </div>
  </div>
  <div class="w-14 flex-1  ...">
             <section className=" p-6">
                 
          
                  <div class="flex flex-wrap justify-evenly ">
                    <div class="p-4">
                      <Card
                        className=" flex flex-wrap !bg-amber-100 h-100 w-70 p-2 text-center"
                        horizontal
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2022/12/19/15/52/book-7665986_1280.jpg"
                          className="h-70 w-80 p-2 object-cover"
                          alt=""
                        />
                        <h5 className="text-2xl text-wrap font-bold tracking-tight text-amber-900">
                          Noteworthy
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Price : $40
                        </p>
                      </Card>
                    </div>
                    <div class="p-4 text-center">
                      <Card
                        className=" flex flex-wrap !bg-amber-100 h-100 w-70 p-2 text-center"
                        horizontal
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2022/12/19/15/52/book-7665986_1280.jpg"
                          className="h-70 w-80 p-2 object-cover"
                          alt=""
                        />
                        <h5 className="text-2xl text-wrap font-bold tracking-tight text-amber-900">
                          Noteworthy
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Price : $40
                        </p>
                      </Card>
                    </div>
                    <div class="p-4">
                      <Card
                        className=" flex flex-wrap !bg-amber-100 h-100 w-70 p-2 text-center"
                        horizontal
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2022/12/19/15/52/book-7665986_1280.jpg"
                          className="h-70 w-80 p-2 object-cover"
                          alt=""
                        />
                        <h5 className="text-2xl text-wrap font-bold tracking-tight text-amber-900">
                          Noteworthy
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Price : $40
                        </p>
                      </Card>
                    </div>
                    <div class="p-4">
                      <Card
                        className=" flex flex-wrap !bg-amber-100 h-100 w-70 p-2 text-center"
                        horizontal
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2022/12/19/15/52/book-7665986_1280.jpg"
                          className="h-70 w-80 p-2 object-cover"
                          alt=""
                        />
                        <h5 className="text-2xl text-wrap font-bold tracking-tight text-amber-900">
                          Noteworthy
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Price : $40
                        </p>
                      </Card>
                    </div>
                  </div>
              
                </section>
  </div>
</div>
    </div>
  );
}

export default AllBooks;
