import styled from './common.module.scss'
import { IPropsModal } from '../../types/typesModal'

export const ModalExp: React.FC<IPropsModal> = ({ setModal, setOpenModal }) => {
	const closeModal = () => {
		setModal('')
		setOpenModal(false)
	}
	return (
		<div className={styled.container}>
			<div className={styled.content}>
				<div className={`${styled.exp} ${styled.contentBox}`}>
					<h3 className={styled.title}>Опыт</h3>
					<p className={styled.expDate}>Июнь 2021 — февраль 2022</p>
					<p className={styled.expTitle}>стартап "NextGen Innovations"</p>
					<p className={styled.expTitle}>
						Профессия:<span> Intern Frontend Developer</span>
					</p>
					<p className={styled.expListTitle}>
						Разработка пользовательских интерфейсов:
					</p>
					<ul className={styled.expList}>
						<li className={styled.expListItem}>
							Создавал адаптивные и интерактивные компоненты с использованием
							React и SCSS.
						</li>
						<li className={styled.expListItem}>
							Внедрял новые фичи и улучшал существующие функциональности на
							основе отзывов пользователей.
						</li>
					</ul>
					<p className={styled.expListTitle}>Интеграция с API:</p>
					<ul className={styled.expList}>
						<li className={styled.expListItem}>
							Использовал Axios для получения и отправки данных на сервер.
						</li>
						<li className={styled.expListItem}>
							Реализовал авторизацию и аутентификацию пользователей.
						</li>
					</ul>
					<p className={styled.expListTitle}>Совместная работа:</p>
					<ul className={styled.expList}>
						<li className={styled.expListItem}>
							Работал в тесной связке с командой бэкенд-разработчиков и
							дизайнеров.
						</li>
						<li className={styled.expListItem}>
							Участвовал в регулярных встречах и брейнстормингах для обсуждения
							и решения текущих задач.
						</li>
					</ul>
				</div>
				<div className={styled.btnContainer}>
					<button className={styled.btn} onClick={() => closeModal()}>
						Закрыть
					</button>
				</div>
			</div>
		</div>
	)
}
