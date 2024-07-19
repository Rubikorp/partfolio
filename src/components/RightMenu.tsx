import { ReactSVG } from 'react-svg'
import recRightUrlOne from '../img/Rec 1 right.svg'
import recRightUrlTwo from '../img/Rec 2 right.svg'
import styled from './rightMenu.module.scss'

export const RightMenu: React.FC = () => {
	return (
		<div className={styled.container}>
			<div className={styled.containerSvg}>
				<div className={styled.containerSvgRec}>
					<ReactSVG className={styled.svgRecOne} src={recRightUrlOne} />
					<p className={styled.textRecOne}>Скилы</p>
				</div>
				<div className={styled.containerSvgRec}>
					<ReactSVG className={styled.svgRecTwo} src={recRightUrlTwo} />
					<p className={styled.textRecTwo}>Портфолио</p>
				</div>
			</div>
		</div>
	)
}
