import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">MyFirstSite</div>

      <nav className="nav">
        <a href="#features">Преимущества</a>
        <a href="#progress">Что сделано</a>
        <a href="#roadmap">План</a>
        <a href="#contact">Контакт</a>
      </nav>
    </header>
  )
}

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

function Progress() {
  return (
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
  )
}

function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <p className="sectionLabel">План развития</p>
      <h2>Что добавим дальше</h2>

      <div className="roadmapGrid">
        <article className="roadmapItem">
          <span>01</span>
          <h3>Улучшим структуру</h3>
          <p>
            Разделим проект на отдельные файлы и сделаем код более удобным для
            поддержки.
          </p>
        </article>

        <article className="roadmapItem">
          <span>02</span>
          <h3>Добавим новые секции</h3>
          <p>
            Сделаем блок с примерами работ, описанием проекта и понятным
            призывом к действию.
          </p>
        </article>

        <article className="roadmapItem">
          <span>03</span>
          <h3>Проверим адаптивность</h3>
          <p>
            Убедимся, что сайт хорошо выглядит на компьютере, планшете и
            телефоне.
          </p>
        </article>

        <article className="roadmapItem">
          <span>04</span>
          <h3>Обновим сайт в интернете</h3>
          <p>
            Сохраним изменения через Git, отправим их на GitHub и обновим сайт
            на Vercel.
          </p>
        </article>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta" id="contact">
      <h2>Следующий шаг — улучшить дизайн и добавить новые блоки</h2>
      <p>
        Этот сайт будет постепенно развиваться: появятся новые секции,
        адаптация под телефон и более аккуратная визуальная структура.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>MyFirstSite — первый учебный проект на React</p>
      <a href="https://my-first-site-ten-blond.vercel.app/">
        Открыть опубликованный сайт
      </a>
    </footer>
  )
}

function App() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Features />
      <Progress />
      <Roadmap />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App