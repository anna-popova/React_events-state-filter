import Portfolio from "./Portfolio";

// Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio мы передаём список проектов — в свойство projects. Отображение проектов — это единственная ответственность компонента ProjectList.

function ProjectList({ projects }) {
	return (
		<div className="project-list">
			{projects.map(item => <div className="project-list__item"><img src={item.img} /></div>)}
		</div>
	)
}

export default ProjectList;