import { ReactSVG } from 'react-svg'
import recRightUrlOne from '../img/Rec 1 right.svg'
import recRightUrlTwo from '../img/Rec 2 right.svg'
import styled from './rightMenu.module.scss'
import { IPropsModal, TModal } from '../types/typesModal'

export const RightMenu: React.FC<IPropsModal> = ({
	setModal,
	setOpenModal,
}) => {
	const openMenu = (menu: TModal) => {
		setModal(menu)
		setOpenModal(true)
	}
	return (
		<div className={styled.container}>
			<div className={styled.containerSvg}>
				<div className={styled.containerSvgRec}>
					<ReactSVG
						className={styled.svgRecOne}
						src={recRightUrlOne}
						onClick={() => {
							openMenu('skills')
						}}
					/>
					<p className={styled.textRecOne}>Скилы</p>
				</div>
				<div className={styled.containerSvgRec}>
					<ReactSVG
						className={styled.svgRecTwo}
						src={recRightUrlTwo}
						onClick={() => {
							openMenu('portfolio')
						}}
					/>
					<p className={styled.textRecTwo}>Портфолио</p>
				</div>
			</div>
		</div>
	)
}
