import styled from './avatar.module.scss'
import { MenuMobile } from './mobile/MenuMobile'
import { IPropsModal } from '../types/typesModal'

export const Avatar: React.FC<IPropsModal> = ({ setModal, setOpenModal }) => {
	return (
		<div className={styled.container}>
			<img className={styled.avatarbg} src='/src/img/avatar_back.png' alt='' />
			<img className={styled.avatar} src='/src/img/avatar.png' alt='' />
			<MenuMobile setModal={setModal} setOpenModal={setOpenModal} />
		</div>
	)
}
