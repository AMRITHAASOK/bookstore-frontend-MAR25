import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
function Auth({register}) {
  return (
    <div >
      <div className="bg-[url('https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_1280.jpg')] bg-cover bg-center bg-fixed h-screen flex justify-center"
      >
        <div className='basis-128'></div>
        <div className='basis-128'>
          <form className="flex max-w-md flex-col gap-4 mt-35 bg-amber-50 p-5 rounded-2xl ">
           {
            register ? 
             <h1 className='text-center text-amber-950 text-4xl'>Register</h1>
             :
              <h1 className='text-center text-amber-950 text-4xl'>Login</h1>
           }
            <div>
              {
                register && 
              <div>
                <div className="mb-2 block">
                <Label htmlFor="username" className='!text-amber-950'>Username</Label>
              </div>
              <TextInput className='' id="username" type="text" placeholder="John Doe" required />
              </div>
              }
              <div className="my-2 block">
                <Label htmlFor="email1" className='!text-amber-950'>Your email</Label>
              </div>
              <TextInput className='' id="email1" type="email" placeholder="name@gmail.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" className='!text-amber-950'>Your password</Label>
              </div>
              <TextInput id="password1" type="password" required />
            </div>

           {
            register ? 
             <div className='flex flex-col'>
              <Button type="submit" className='!bg-amber-950'>SignUp</Button>
             <p className='text-center mt-3'>Already a member? 
                 <Link to={'/login'}>
                  Login Now!
                </Link>
              </p>
             </div>
             :
              <div  className='flex flex-col'>
                <Button type="submit" className='!bg-amber-950'>SignIn</Button>
                 <p className='text-center mt-3'>New to here? 
                 <Link to={'/register'}>
                  Register Now!
                </Link>
              </p>
              </div>
           }
            <div>
              
            </div>
          </form>

        </div>
        <div className='basis-128'></div>
      </div>
    </div>
  )
}

export default Auth
