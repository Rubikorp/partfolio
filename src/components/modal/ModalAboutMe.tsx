import styled from './common.module.scss'
import { IPropsModal } from '../../types/typesModal'

export const ModalAboutMe: React.FC<IPropsModal> = ({
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
					<h3 className={styled.title}>Общая информация</h3>
					<p>
						Мотивированный и целеустремленный Junior Frontend Developer с годом
						опыта работы в команде. Обладаю глубокими знаниями и практическими
						навыками работы с React, Redux Toolkit, Axios, SCSS,
						styled-components, TypeScript и Git. Умею эффективно работать в
						команде, стремлюсь к постоянному саморазвитию и улучшению своих
						профессиональных навыков.
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
