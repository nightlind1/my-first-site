const features = [
  {
    title: 'React',
    text: 'Учусь собирать страницу из блоков и постепенно понимать структуру современного frontend-проекта.',
  },
  {
    title: 'GitHub',
    text: 'Сохраняю версии проекта, отправляю код в облако и учусь работать как с настоящим проектом.',
  },
  {
    title: 'Vercel',
    text: 'Публикую сайт в интернете и понимаю полный путь от локального проекта до живой ссылки.',
  },
]

function Features() {
  return (
    <section className="section" id="features">
      <p className="sectionLabel">Преимущества</p>
      <h2>Что я отрабатываю в этом проекте</h2>

      <div className="cards">
        {features.map((feature) => (
          <article className="card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features