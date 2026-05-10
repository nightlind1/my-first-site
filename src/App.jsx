import './App.css'

function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="logo">MyFirstSite</div>

        <nav className="nav">
          <a href="#features">Преимущества</a>
          <a href="#progress">Что сделано</a>
          <a href="#contact">Контакт</a>
        </nav>
      </header>

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

      <section className="section progress" id="progress">
        <div>
          <p className="sectionLabel">Прогресс</p>
          <h2>Что уже сделано</h2>
        </div>

        <ul className="progressList">
          <li>Установлены Node.js, npm, Git и VS Code</li>
          <li>Создан React-проект через Vite</li>
          <li>Проект сохранён через Git и отправлен на GitHub</li>
          <li>Сайт опубликован на Vercel</li>
          <li>Начата разработка первого лендинга</li>
        </ul>
      </section>

      <section className="cta" id="contact">
        <h2>Следующий шаг — улучшить дизайн и добавить новые блоки</h2>
        <p>
          Этот сайт будет постепенно развиваться: появятся новые секции,
          адаптация под телефон и более аккуратная визуальная структура.
        </p>
      </section>
    </main>
  )
}

export default App