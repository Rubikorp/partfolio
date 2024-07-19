import styled from './avatar.module.scss'

export const Avatar = () => {
	return (
		<div className={styled.container}>
			<img className={styled.avatarbg} src='/src/img/avatar_back.png' alt='' />
			<img className={styled.avatar} src='/src/img/avatar.png' alt='' />
		</div>
	)
}
