function Features() {
  return (
    <section className="section" id="features">
      <p className="sectionLabel">Преимущества</p>
      <h2>Что я отрабатываю в этом проекте</h2>

      <div className="cards">
        <article className="card">
          <h3>React</h3>
          <p>
            Учусь собирать страницу из блоков и постепенно понимать структуру
            современного frontend-проекта.
          </p>
        </article>

        <article className="card">
          <h3>GitHub</h3>
          <p>
            Сохраняю версии проекта, отправляю код в облако и учусь работать
            как с настоящим проектом.
          </p>
        </article>

        <article className="card">
          <h3>Vercel</h3>
          <p>
            Публикую сайт в интернете и понимаю полный путь от локального
            проекта до живой ссылки.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Features