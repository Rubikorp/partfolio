import styled from './common.module.scss'
import { IPropsModal } from '../../types/typesModal'

export const ModalSkills: React.FC<IPropsModal> = ({
	setModal,
	setOpenModal,
}) => {
	const closeModal = () => {
		setModal('')
		setOpenModal(false)
	}
	return (
		<div className={styled.container}>
			<div className={styled.content}>
				<div>
					<h3 className={styled.title}>Скилы</h3>

					<p>
						<span>Фронтенд:</span> React, Redux Toolkit, Axios,
						styled-components, SCSS
					</p>
					<p>
						<span>Языки программирования:</span> JavaScript, TypeScript
					</p>
					<p>
						<span>Инструменты и платформы:</span> Git, GitHub
					</p>
					<p>
						<span>Другие:</span> REST API, управление состоянием, адаптивная
						верстка
					</p>
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
