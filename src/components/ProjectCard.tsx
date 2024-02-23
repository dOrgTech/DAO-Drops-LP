import Image from 'next/image'

export interface ProjectType {
  url: string
  imageSrc: string
  title: string
  description: string
  buttonText: string
}

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <a href={project.url} className='card xl:card-blue-dots group'>
      <Image src={project.imageSrc} alt={project.title} width={488} height={275} />
      <div className='flex flex-col items-start justify-center px-4 py-5 pt-2.5 sm:p-6 sm:pt-2.5'>
        <div className='mx-auto mb-2 text-2xl font-extrabold'>{project.title}</div>
        <p className='mb-5 text-sm sm:text-base'>{project.description}</p>
        <button className='button mx-auto'>{project.buttonText}</button>
      </div>
    </a>
  )
}
