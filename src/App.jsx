import React from "react";
import {FaGithub} from "react-icons/fa";
import './App.css'

export default function App() {
  return (
    <>
  <div className="relative overflow-hidden bg-slate-700 py-4 sm:py-16">
      <h1 className="text-center text-5xl font-semibold text-slate-100">Get Hired !!</h1>
      <p className="text-center text-xl font-normal text-lime-100">This is a job board website</p>
  </div>
{/*         <div> 
      <h1 className="text-center text-3xl font-semibold text-slate-800 py-48">Content coming here soon....</h1>
      </div>  */}
      <div class="pt-6 px-4 sm:px-12 lg:px-3 max-w-5xl mx-auto pb-6">
  <div class="grid gap-4 ri">
  <div class="bg-slate-50 border-2 border-slate-000 py-5 px-4" >
    <div>
      <p class="text-lg font-medium">Job Title</p>
      <p class="text-gray-700 text-sm">Company Name</p>
      <p class="nt-4 text-sm font-medium text-gray-600">Remote</p>
    </div>
  </div>

  <div class="bg-slate-50 border-2 border-slate-000 py-5 px-4" >
    <div>
      <p class="text-lg font-medium">Job Title</p>
      <p class="text-gray-700 text-sm">Company Name</p>
      <p class="nt-4 text-sm font-medium text-gray-600">Remote</p>
    </div>
  </div>

    <div class="bg-slate-50 border-2 border-slate-000 py-5 px-4" >
    <div>
      <p class="text-lg font-medium">Job Title</p>
      <p class="text-gray-700 text-sm">Company Name</p>
      <p class="nt-4 text-sm font-medium text-gray-600">Remote</p>
    </div>
  </div>

    <div class="bg-slate-50 border-2 border-slate-000 py-5 px-4" >
    <div>
      <p class="text-lg font-medium">Job Title</p>
      <p class="text-gray-700 text-sm">Company Name</p>
      <p class="nt-4 text-sm font-medium text-gray-600">Remote</p>
    </div>
  </div>
  </div>
</div>


      
      
    <div className="relative overflow-hidden bg-blue-700 py-4 sm:py-16">
      <h1 className="text-center text-3xl font-semibold text-blue-100">Footer</h1>
      <div className="flex justify-center">
        <p className="text-slate-100"> <FaGithub size={28} /> </p>
      </div>
      <p className="text-center text-xl font-normal text-blue-50">This is a job board website</p>
    </div>
    </>
  )
}
