import Portfolio from "./Portfolio";

// Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio мы передаём три свойства:
// filters — список фильтров, название которых совпадает с категориями проектов;
// selected — активный фильтр;
// onSelectFilter(filter) — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

function Toolbar({ filters }, selected, onSelectFilter) {
	return (
		<div className="toolbar">
			{filters.map(filter => <button className="toolbar__button" data-filter={filter.replace(/\s/g,'')}>{filter}</button>)}
		</div>
	)
}

export default Toolbar;