// Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio мы передаём три свойства:
// filters — список фильтров, название которых совпадает с категориями проектов;
// selected — активный фильтр;
// onSelectFilter(filter) — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

function Toolbar({ filters, selected, onSelectFilter }) {
	return (
		<div className="toolbar">
			{filters.map(filter => {
				// const isSelected = filter === selected;

				// let className = "toolbar__button";

				// if (isSelected) {
				// 	className = "toolbar__button selected"
				// }

				// return <button className={className} onClick={() => onSelectFilter(filter)}>{filter}</button>

				return <button className={`toolbar__button ${filter === selected ? 'selected' : ''}`} onClick={() => onSelectFilter(filter)}>{filter}</button>

			})}
		</div>
	)
}

export default Toolbar;