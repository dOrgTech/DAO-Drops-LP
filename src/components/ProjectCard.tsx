'use client'

import Image from 'next/image'

export interface ProjectType {
  url: string
  imageSrc: string
  title: string
  description: string
  buttonText: string
  notification?: {
    text: string
    link: string
  }
}

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className='relative'>
      <a href={project.url} className='card xl:card-blue-dots group'>
        <Image src={project.imageSrc} alt={project.title} width={488} height={275} />
        <div className='flex flex-col items-start justify-center px-4 py-5 pt-2.5 sm:p-6 sm:pt-2.5'>
          <div className='mx-auto mb-2 text-2xl font-extrabold'>{project.title}</div>
          <p className='mb-5 text-sm sm:text-base'>{project.description}</p>
          <button className='button mx-auto'>{project.buttonText}</button>
        </div>
      </a>

      {project.notification && (
        <div className='absolute -top-24 left-1/2 z-10 -translate-x-1/2'>
          <a
            href={project.notification.link}
            target='_blank'
            rel='noopener noreferrer'
            className='relative block cursor-pointer'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl transition-transform duration-300 hover:scale-110'>
              <div className='w-[230px] rounded-full bg-white px-4 py-3'>
                <div className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-center text-sm font-bold text-transparent'>
                  🎉 NEW VERSION!
                </div>
                <div className='mt-1 px-2 text-center text-sm leading-tight text-gray-700'>
                  {project.notification.text}
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}
