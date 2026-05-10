const skills = [
  {
    title: 'React-компоненты',
    text: 'Понимаю, как разбивать страницу на отдельные части и собирать их в App.jsx.',
  },
  {
    title: 'CSS-оформление',
    text: 'Умею менять внешний вид страницы: цвета, размеры, отступы, сетки и адаптацию.',
  },
  {
    title: 'Git',
    text: 'Сохраняю версии проекта через коммиты и понимаю базовый рабочий цикл.',
  },
  {
    title: 'GitHub',
    text: 'Храню код проекта в облаке и отправляю туда изменения через git push.',
  },
  {
    title: 'Vercel',
    text: 'Публикую сайт в интернете и обновляю его после изменений в GitHub.',
  },
  {
    title: 'Массивы и .map()',
    text: 'Вывожу повторяющиеся карточки из списка данных, а не копирую разметку вручную.',
  },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="sectionLabel">Навыки</p>
      <h2>Что я уже начал осваивать</h2>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <article className="skillCard" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills