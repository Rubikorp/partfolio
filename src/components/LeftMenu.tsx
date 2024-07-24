import { ReactSVG } from 'react-svg'
import recLeftUrlOne from '../img/Rec 1 left.svg'
import recLeftUrlTwo from '../img/Rec 2 left.svg'
import styled from './leftMenu.module.scss'
import { IPropsModal, TModal } from '../types/typesModal'

export const LeftMenu: React.FC<IPropsModal> = ({ setModal, setOpenModal }) => {
	const clickMenu = (menu: TModal) => {
		setModal(menu)
		setOpenModal(true)
	}

	return (
		<div className={styled.container}>
			<div className={styled.containerSvg}>
				<div className={styled.containerSvgRec}>
					<ReactSVG
						className={styled.svgRecOne}
						src={recLeftUrlOne}
						onClick={() => clickMenu('aboutMe')}
					/>
					<p className={styled.textRecOne}>Общая информация</p>
				</div>
				<div className={styled.containerSvgRec}>
					<ReactSVG
						className={styled.svgRecTwo}
						src={recLeftUrlTwo}
						preserveAspectRatio='none'
						onClick={() => {
							clickMenu('exp')
						}}
					/>
					<p className={styled.textRecTwo}>Опыт работы</p>
				</div>
			</div>
		</div>
	)
}
