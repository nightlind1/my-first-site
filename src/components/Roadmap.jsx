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

export default Roadmap