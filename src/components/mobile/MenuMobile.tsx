import { ReactSVG } from 'react-svg'
import leftDownSvg from '../../img/recdownleftMobile.svg'
import rightDownSvg from '../../img/recdownrightMobile.svg'
import leftUpSvg from '../../img/recupleftMobile.svg'
import rightUpSvg from '../../img/recuprightMobile.svg'
import { IPropsModal, TModal } from '../../types/typesModal'

import styled from './MenuMobile.module.scss'
export const MenuMobile: React.FC<IPropsModal> = ({
	setModal,
	setOpenModal,
}) => {
	const clickMenu = (menu: TModal) => {
		setModal(menu)
		setOpenModal(true)
	}
	return (
		<div className={styled.container}>
			<ReactSVG
				src={leftUpSvg}
				className={styled.svgUpLeft}
				onClick={() => clickMenu('aboutMe')}
			/>
			<ReactSVG
				src={rightUpSvg}
				className={styled.svgUpRight}
				onClick={() => clickMenu('skills')}
			/>
			<ReactSVG
				src={leftDownSvg}
				className={styled.svgDownLeft}
				onClick={() => clickMenu('exp')}
			/>
			<ReactSVG
				src={rightDownSvg}
				className={styled.svgDownRight}
				onClick={() => clickMenu('portfolio')}
			/>
		</div>
	)
}
