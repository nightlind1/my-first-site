const roadmapItems = [
  {
    number: '01',
    title: 'Улучшим структуру',
    text: 'Разделим проект на отдельные файлы и сделаем код более удобным для поддержки.',
  },
  {
    number: '02',
    title: 'Добавим новые секции',
    text: 'Сделаем блок с примерами работ, описанием проекта и понятным призывом к действию.',
  },
  {
    number: '03',
    title: 'Проверим адаптивность',
    text: 'Убедимся, что сайт хорошо выглядит на компьютере, планшете и телефоне.',
  },
  {
    number: '04',
    title: 'Обновим сайт в интернете',
    text: 'Сохраним изменения через Git, отправим их на GitHub и обновим сайт на Vercel.',
  },
]

function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <p className="sectionLabel">План развития</p>
      <h2>Что добавим дальше</h2>

      <div className="roadmapGrid">
        {roadmapItems.map((item) => (
          <article className="roadmapItem" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Roadmap