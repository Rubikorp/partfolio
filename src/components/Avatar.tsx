import { IPropsModal } from '../types/typesModal'
import styled from './avatar.module.scss'
import { MenuMobile } from './mobile/MenuMobile'
import avatarBack from '../assets/img/avatar_back.png'
import avatar from '../assets/img/avatar.png'

export const Avatar: React.FC<IPropsModal> = ({ setModal, setOpenModal }) => {
	return (
		<div className={styled.container}>
			<img className={styled.avatarbg} src={avatarBack} alt='' />
			<img className={styled.avatar} src={avatar} alt='' />
			<MenuMobile setModal={setModal} setOpenModal={setOpenModal} />
		</div>
	)
}
