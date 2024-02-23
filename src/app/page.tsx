import ProjectCard from '@/components/ProjectCard'
import projectsConfig from '@/projectsConfig'

const Home = () => {
  return (
    <>
      <main className='bg flex min-h-screen flex-col flex-wrap items-center justify-center gap-16 px-6 py-16 xl:flex-row xl:gap-40'>
        {projectsConfig.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
    </>
  )
}

export default Home
