const projects = [
  {
    title: 'Первый React-лендинг',
    status: 'Готово',
    description:
      'Учебный лендинг, созданный на React и опубликованный через Vercel. В проекте есть компоненты, стили, GitHub и автоматическое обновление сайта.',
    tags: ['React', 'Vite', 'Vercel'],
  },
  {
    title: 'Блок навыков',
    status: 'Готово',
    description:
      'Отдельная секция с карточками навыков. Данные хранятся в массиве и выводятся через .map(), чтобы не копировать разметку вручную.',
    tags: ['Components', 'Arrays', 'map'],
  },
  {
    title: 'Будущий проект',
    status: 'В планах',
    description:
      'Следующий учебный проект можно будет сделать более прикладным: портфолио, сайт услуги, каталог, домашнюю бухгалтерию или мини-приложение.',
    tags: ['Planning', 'Practice', 'Growth'],
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="sectionLabel">Проекты</p>
      <h2>Первые результаты обучения</h2>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <div className="projectHeader">
              <h3>{project.title}</h3>
              <span>{project.status}</span>
            </div>

            <p>{project.description}</p>

            <div className="projectTags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects