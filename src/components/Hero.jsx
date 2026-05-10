function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="badge">Первый учебный проект</p>

        <h1>Мой первый сайт на React</h1>

        <p className="heroText">
          Я учусь создавать современные сайты с помощью ChatGPT, VS Code,
          GitHub и Vercel. Этот лендинг — мой первый опубликованный проект.
        </p>

        <div className="heroActions">
          <a className="button primary" href="#features">
            Посмотреть проект
          </a>

          <a className="button secondary" href="#progress">
            Что уже сделано
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero