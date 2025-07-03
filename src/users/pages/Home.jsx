import React from "react";
import Header from "../components/Header";

import { GiBookshelf } from "react-icons/gi";
import { Card } from "flowbite-react";
import PageFooter from "../../components/PageFooter";
function Home() {
  return (
    <>
      <Header />
      <section
        id="banner"
        className="bg-[url('https://cdn.pixabay.com/photo/2014/09/28/21/30/light-465350_1280.jpg')] bg-cover bg-center bg-fixed h-screen flex justify-center"
      >
        <div className="text-center p-40">
          <h1 className="text-5xl mt-10 text-amber-100 hover:text-amber-950 ">
            Where every tale finds it's shore.
          </h1>
          <p className=" text-amber-100 my-4">
            Your trusted destination for buying and selling pre-loved books.
          </p>

          <div className="mt-2">
            <div className="flex items-center rounded-md bg-amber-100 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                <GiBookshelf className="text-2xl" />
              </div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Choose your book"
                className="block w-2 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 p-6">
        <div className="flex items-stretch justify-center">
          <div className="py-4"></div>
          <div className="py-12 text-center">
            <p className="text-4xl">NEW ARRIVALS</p>
            <p className="text-2xl">Explore Our Latest Collection</p>
          </div>
          <div className="py-2"></div>
        </div>

        <div class="flex items-stretch justify-evenly ">
          <div class="py-4">
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
          <div class="py-4 text-center">
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
          <div class="py-4">
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
          <div class="py-4">
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
        <div className="text-center m-4">
          <button className="bg-amber-950 text-amber-100 border-2 rounded-4xl p-5">
            Explore More
          </button>
        </div>
      </section>

      <section className="bg-amber-100 p-10">
        <div className="flex justify-evenly">
          <div className="p-5 flex flex-col w-200">
            <p className="text-4xl">FEATURED AUTHORS</p>
            <p className="text-5xl text-wrap mb-5">Shakespeare, Poet</p>
            <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem numquam quam delectus ullam earum ab soluta non ipsum, quos explicabo? Fugit dolores qui tenetur optio tempora inventore cum molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas itaque dolorem placeat quisquam, dolorum assumenda incidunt quis dolore voluptas tenetur aspernatur explicabo a error delectus ad ipsam. Numquam, sit obcaecati.
           </p>
           <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda non hic harum doloremque maxime aut vitae necessitatibus soluta officiis modi, repellat quidem dolorem libero vero! Beatae esse perspiciatis quidem eveniet!
           Beatae voluptatum hic unde facere nihil soluta deleniti quos officia obcaecati distinctio repudiandae excepturi delectus tenetur nam suscipit dolores amet, voluptates fugiat sequi, tempore dolorum. Unde fugit libero dolores ducimus!
           Odio laboriosam placeat quaerat earum distinctio neque ipsa maxime id corporis optio eaque enim nulla fugiat dolorem est sapiente, aspernatur repellendus sint sequi porro quam amet veniam dolores! Ut, ullam!</p>
            
          </div>
          <div className="p-5">
            <img src="https://cdn.pixabay.com/photo/2012/11/28/11/10/shakespeare-67698_1280.jpg" alt="" width={'350px'} height={'500px'} />
          </div>
          
        </div>
      </section>

      
              <section className="bg-amber-50 p-6 text-center">
                <p className="text-4xl">TESTIMONIALS </p>
                <p className="text-4xl">See What Others Are Saying</p>

       

        <div class="flex items-stretch justify-evenly  ">
          <div class="py-4">
            <Card
              className=" flex flex-wrap !bg-amber-50 h-100 w-100 p-15   text-center"
              horizontal
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/07/12/18/15/man-3534091_1280.jpg"
                className="h-80 w-80 p-2 "
                alt=""
                width={'50px'}
                height={'50px'}
              />
              <h5 className=" text-wrap font-bold tracking-tight text-amber-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem natus debitis, id quia reiciendis consequuntur accusantium laborum magnam, aliquid maxime distinctio eaque minima labore. Commodi quidem ex magnam quae?
              </h5>
              
            </Card>
          </div>
          
          
        </div>
      </section>
     
     <PageFooter/>
    </>
  );
}

export default Home;
