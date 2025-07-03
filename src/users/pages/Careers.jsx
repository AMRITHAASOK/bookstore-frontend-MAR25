import React from 'react'
import Header from '../components/Header'
import {  Card } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader} from "flowbite-react";
import { useState } from "react";
import { Label, Textarea ,TextInput} from "flowbite-react";

function Careers() {
   const [openModal, setOpenModal] = useState(false);
  return (
    <div>
        <Header/>
        <div className='p-20'>
          <h1 className='text-center mt-10 p-5 text-4xl'>Careers</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, a doloribus, optio maiores error nulla alias ipsa deleniti harum libero, non at ex esse aut voluptas porro exercitationem nemo quibusdam!
          Quasi sequi quae dolorem cumque minima in sed odit laudantium maiores. Iusto architecto praesentium, ratione, doloribus tempore similique quaerat iure quae atque, repellendus illo voluptas vero. Corporis, nesciunt. Cum, similique.
          Possimus, nam? Ut facere soluta, itaque saepe laboriosam impedit error ad eum quod accusantium fugit vero commodi voluptatum hic aliquam ipsa et minima, rerum quas repudiandae. Maxime ut commodi qui.</p>
        </div>
         <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <div className="flex justify-between items-center ms-100 rounded-md    bg-amber-100 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <div className=" shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                          Job Title :{" "}
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Shopkeeper"
                          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                        <button className="bg-amber-950 p-3 rounded text-amber-100 flex">
                          Search <CiSearch className="text-2xl font-extrabold" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <Card className=" !bg-amber-950 w-200 ms-70 my-10">
      <h5 className="text-2xl font-bold tracking-tight !text-amber-100">
        Store Manager
      </h5>
      <ul className="font-normal !text-amber-100 dark:text-gray-400">
      <li> Kochi</li>
      <li>Job Type :Part-Time</li>
      <li>Salary :10000-15000/month</li>
      <li>Qualification :</li>
      <li>Experience :0-1yrs</li>
      <li>Description :</li>
      </ul>
      <Button  onClick={() => setOpenModal(true)} className='!bg-amber-100 text-amber-950 font-extrabold text-2xl'>
       Apply
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className='!bg-amber-50 text-amber-950'>Application Form</ModalHeader>
        <ModalBody className='!bg-amber-50  text-amber-950'>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <TextInput type="text" placeholder='Full Name'color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />
              <TextInput type="text" placeholder='Qualification' color="warning" className='w-100  !text-amber-950 font-extrabold ' />
              <TextInput type="text" placeholder='Email Id' color="warning" className='w-100   !text-amber-950 font-extrabold me-3 my-2'/>
              <TextInput type="text" placeholder='Phone Number ' color="warning" className='w-100   !text-amber-950 font-extrabold '/>
            </p>
            <p className="text-base leading-relaxed ">
              <div className="max-w ">
     
      <Textarea id="comment" placeholder="Cover Letter" color="warning" required rows={4} className='!bg-amber-50  !text-amber-950 font-extrabold ' />
    </div>        </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
                  </div>
                </div>
    </div>
  )
}

export default Careers
