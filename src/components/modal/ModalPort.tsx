import { IPropsModal } from '../../types/typesModal'
import styled from './common.module.scss'

export const ModalPort: React.FC<IPropsModal> = ({
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
				<div className={`${styled.port} ${styled.contentBox}`}>
					<h3 className={styled.title}>Портфолио</h3>
					<p className={styled.portTitle}>ПЕТ-Проекты:</p>
					<ul className={styled.portList}>
						<li className={styled.portItem}>
							<a
								className={styled.portItemLink}
								href='https://github.com/Rubikorp/countries-react'
								target='_blank'
								rel='noopener'
							>
								Countries
							</a>
						</li>
						<li className={styled.portItem}>
							<a
								className={styled.portItemLink}
								href='https://github.com/Rubikorp/todo_react.v18'
								target='_blank'
								rel='noopener'
							>
								Task Manager App
							</a>
						</li>
						<li className={styled.portItem}>
							<a
								className={styled.portItemLink}
								href='https://github.com/Rubikorp/email-editor-react'
								target='_blank'
								rel='noopener'
							>
								Email editor
							</a>
						</li>
						<li className={styled.portItem}>
							<a
								className={styled.portItemLink}
								href='https://github.com/Rubikorp/game_snake'
								target='_blank'
								rel='noopener'
							>
								Игра змейка
							</a>
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
