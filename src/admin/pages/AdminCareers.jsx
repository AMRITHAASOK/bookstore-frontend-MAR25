import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSIdebar from '../components/AdminSIdebar'
import { Card, Button } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { Table, TableBody, Textarea, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Modal, ModalBody, ModalFooter, ModalHeader} from "flowbite-react";

function AdminCareers() {
  const [jobStatus, setJobStatus] = useState(true)
  const [viewStatus, setViewStatus] = useState(false)
     const [openModal, setOpenModal] = useState(false);
  
  return (
    <div>
      <AdminHeader />
      <div className="row flex h-150">
        <div className="col flex flex-col items-center">
          <AdminSIdebar />
        </div>

        <div className="col bg-amber-50 w-400">
          <h1 className='text-4xl font-extrabold text-center mt-10'>Careers</h1>
          <div class="flex flex-row mt-5">
            <div className="basis-128"></div>
            <div className="basis-64">
              <div className="flex">
                <p className={jobStatus ? 'border border-r-2  border-l-2 border-t-2 border-b-0 p-3 mx-2   ' : 'border border-r-2  border-l-2 border-t-2 border-b-2  p-3 mx-2 shadow-2xl '} onClick={() => { setJobStatus(true); setViewStatus(false) }}>Job List</p>
                <p onClick={() => { setJobStatus(false); setViewStatus(true) }} className={viewStatus ? 'border border-r-2  border-l-2 border-t-2 border-b-0 p-3 mx-2' : 'border border-r-2  border-l-2 border-t-2 border-b-2 p-3 mx-2 shadow-2xl'}>View Applicant</p>
              </div>


            </div>
            <div class="basis-128"></div>

          </div>
          <div className="flex-row">
            {
              jobStatus ?
                <div className='flex flex-wrap p-5 '>
                  <div className="flex row">
                    <div>
                      <TextInput type="text" placeholder='Search Job' />
                    </div>
                    <div className='ms-200'>
                      <Button onClick={() => setOpenModal(true)} >Add</Button>

                    </div>
                        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                            <ModalHeader className='!bg-amber-50 text-amber-950'>Application Form</ModalHeader>
                            <ModalBody className='!bg-amber-50  text-amber-950'>
                              <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  <TextInput type="text" placeholder='Job Title'color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />
                                                                    <TextInput type="text" placeholder='Location'color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />

                                  <TextInput type="text" placeholder='Job type'color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />

                                  <TextInput type="text" placeholder='Salary' color="warning" className='w-100  !text-amber-950 font-extrabold ' />
                                  <TextInput type="text" placeholder='Qualification' color="warning" className='w-100   !text-amber-950 font-extrabold me-3 my-2'/>
                                  <TextInput type="text" placeholder='Experience ' color="warning" className='w-100   !text-amber-950 font-extrabold '/>
                                </p>
                                <p className="text-base leading-relaxed ">
                                  <div className="max-w ">
                         
                          <Textarea id="comment" placeholder="Description" color="warning" required rows={4} className='!bg-amber-50  !text-amber-950 font-extrabold ' />
                        </div>        </p>
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={() => setOpenModal(false)}>Add</Button>
                              <Button color="alternative" onClick={() => setOpenModal(false)}>
                               Reset
                              </Button>
                            </ModalFooter>
                          </Modal>

                  </div>
                  <div className="flex row">
                    <Card className='!bg-amber-100 my-4 w-250' >
                      <div className='flex justify-between'>
                        <h1 className='text-3xl'>Job Title</h1>
                        <MdDelete className='text-2xl' />
                      </div>
                      <hr />
                      <div>
                       <p> Kochi</p>
                        <p> Job Type : full-time</p>
                       <p> Salary : 20000-30000/month</p>
<p> Qualification : MBA</p>
<p>Experience : 1-2yr</p>
                       
<p>    Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis consectetur expedita numquam error nemo dolores sapiente autem sunt veniam tempora unde maiores, illum, quo, assumenda consequatur exercitationem deserunt dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti repellendus amet dolorum cupiditate minima rerum aliquam numquam aliquid, beatae necessitatibus consectetur odio, voluptatum pariatur sed laboriosam modi consequuntur reprehenderit.</p>
                       

                        

                    
                      </div>

                    </Card>
                  </div>

                </div>
                :
                <div className='flex p-5'>
                 <div className="overflow-x-auto">
      <Table hoverable className='!bg-amber-50'>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sl</TableHeadCell>
            <TableHeadCell>Job Title</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone Number</TableHeadCell>
            <TableHeadCell>Cover Letter</TableHeadCell>
            <TableHeadCell>Resume</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              547889
            </TableCell>
            <TableCell>Sale Executive</TableCell>
            <TableCell>Sarun</TableCell>
            <TableCell>sarun@gmail.com</TableCell>
            <TableCell>9898989898</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit iste quisquam officiis? Perferendis expedita totam neque nulla quibusdam fugiat nostrum possimus laudantium ducimus maxime. Consequuntur unde numquam eligendi doloribus!</TableCell>
            <TableCell>
              <a href="">Resume</a>
            </TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </div>
                </div>
            }

          </div>
        </div>

      </div>

    </div>
  )
}

export default AdminCareers
