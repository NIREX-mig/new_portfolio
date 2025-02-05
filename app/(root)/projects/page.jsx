"use client";

import Card from '@/Components/Card'
import Model from '@/Components/Model'
import { projectsData } from '@/constant/projects'
import globalContext from '@/context/context';
import React, { useContext } from 'react'

export default function Projects() {
  const { modelIsOpen, setModelIsOpen } = useContext(globalContext);

  return (
    <section className=" flex flex-col items-center border dark:border-gray-800 lg:py-12 py-10 dark:bg-bdark pb-20 lg:pb-20" >
      <Model modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen} />
      <h3 className="capitalize lg:text-4xl text-2xl font-bold text-center font-[EuroStyle Normal] pb-4 line dark:text-white">
        my projects
      </h3>
      <section className="p-2 pt-10 lg:w-[95%] w-[98%] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {projectsData.map((item, index) => {
          return (
            <Card key={index} data={item} />
          )
        })}
      </section>
    </section>
  )
}
