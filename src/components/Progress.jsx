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

export default Progress