import { ProjectType } from './components/ProjectCard'

const projectsConfig: ProjectType[] = [
  {
    url: 'https://v1.daodrops.io',
    imageSrc: '/assets/projects/daodrops-v1.png',
    title: 'DAODROPS V1',
    description:
      'DAO Drops Round 1 was a retroactive funding experiment that enabled thousands of Ethereum users to influence the allocation of ecosystem funds through weighted voting.',
    buttonText: 'VISIT APP',
  },
  {
    url: 'https://pairdrop.daodrops.io',
    imageSrc: '/assets/projects/pairdrop.png',
    title: 'PAIRDROP',
    description:
      'PairDrop is a forkable template for running community allocation rounds. It leverages random sampling and pairwise comparison to make decision-making fun and efficient while minimizing favoritism and bias.',
    buttonText: 'VISIT APP',
  },
]

export default projectsConfig
