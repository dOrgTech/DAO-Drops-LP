import ProjectCard from '@/components/ProjectCard'
import projectsConfig from '@/projectsConfig'

const Home = () => {
  return (
    <>
      <main className='bg flex min-h-screen flex-col flex-wrap items-center justify-center gap-16 px-6 pb-16 pt-32 xl:flex-row xl:gap-40 xl:pt-16'>
        {projectsConfig.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
    </>
  )
}

export default Home
