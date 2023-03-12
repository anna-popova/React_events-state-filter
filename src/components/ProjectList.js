import Portfolio from "./Portfolio";

// Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio мы передаём список проектов — в свойство projects. Отображение проектов — это единственная ответственность компонента ProjectList.

function ProjectList({ projects }) {
	return (
		<div className="project-list">
			{/* ?как передать key? в div пробовала указать key={item}, но в браузере при инспектировании элементов никакого key я не вижу вообще */}
			{projects.map(item => <div className="project-list__item"><img src={item.img} /></div>)}
		</div>
	)
}

export default ProjectList;