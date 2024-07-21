import Header from "@/app/_components/Header";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";



export default function Page() {
  return (
 <>
  

<section className="bg-gray-800">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/signIn.png"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-3 lg:pl-6 lg:pt-6 w-full  bg-black">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <Image src={'/logo.svg'} width={60} height={60} alt='logo'/>
        </a>

        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl ">
          Welcome to AI CONTENT HUB
        </h2>

        
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
            href="#"
          >
            <span className="sr-only">Home</span>
            <Image src={'/logo.svg'} width={60} height={60} alt='logo'/>
          </a>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl ">
            Welcome to AI CONTENT HUB
          </h1>

      
        </div>
          <div className="mt-5 ml-12"><SignIn /></div>
       
      </div>
    </main>
  </div>
</section>
    
    
</>
  ) 
}