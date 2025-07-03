import React from 'react'
import Header from '../components/Header'
import PageFooter from '../../components/PageFooter'
import { ImLocation } from "react-icons/im";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Label, Textarea, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Button } from "flowbite-react";
function Contact() {
  return (
    <div>
      <Header />
      <section className='mt-20'>
        <div>
          <p className='text-4xl text-center'>Contact</p>
          <p className='text-justify px-10 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, assumenda odio velit sed obcaecati est possimus quae aliquid hic aperiam, cupiditate molestias consectetur corrupti. Laborum totam ex quis illum ipsa!
            Necessitatibus incidunt ipsam fuga optio quia consequuntur ipsum rerum aut excepturi. In impedit sequi perferendis. Eum tempore magnam totam pariatur laudantium quaerat repellat aperiam corrupti distinctio, blanditiis quidem, voluptatem repellendus.
            Quaerat adipisci illo laboriosam perferendis quibusdam aperiam a, quo blanditiis, earum necessitatibus veniam iusto at sit doloremque, ipsa eos facilis esse. Sapiente dicta culpa enim dolor nam quae nesciunt ullam?</p>
        </div>
      </section>
      <section>
        <div className="flex justify-around m-10">
          <div className='flex'> <ImLocation className='text-red-700 text-3xl' /><p >  Kakkand,Kochi </p></div>
          <div className='flex'> <IoMdPhonePortrait className='text-3xl' /> +91-9898989898</div>
          <div className='flex'> <MdOutlineEmail className='text-3xl text-amber-600' /> storyharbor@gmail.com</div>
        </div>
      </section>
      <div className="flex">
        <div className='basis-150 p-10'>
          <form className="bg-amber-950 rounded p-10 ms-20">
             <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <TextInput id="name" type="text"  placeholder="John Doe" required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4">Your email</Label>
              </div>
              <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment">Your message</Label>
              </div>
              <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
            </div>
            <Button className='!bg-amber-900 ms-30 my-5'>Send Message</Button>
          </form>
        </div>
        <div className='p-10 ps-20 '>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7932034043156!2d76.93963047424188!3d8.519448591522954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0009c76167%3A0x4f50abbcc52fbd2f!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v1751019768562!5m2!1sen!2sin" width="500" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default Contact
