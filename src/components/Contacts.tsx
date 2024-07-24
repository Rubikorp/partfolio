import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import emailSrc from '../assets/img/email.svg'
import telegramSrc from '../assets/img/telegram.svg'
import whatsappSrc from '../assets/img/whatsapp.svg'
import styled from './contacts.module.scss'

export const Contacts: React.FC = () => {
	const [hoverEl, setHoverEl] = useState('')

	return (
		<div>
			<h3 className={styled.title}>КОНТАКТЫ</h3>
			<div className={styled.container}>
				<div className={styled.block}>
					<a
						href='https://t.me/Rubikorp'
						target='_blank'
						rel='noopener'
						onMouseMove={() => setHoverEl('telegram')}
						onMouseOut={() => setHoverEl('')}
					>
						<ReactSVG src={telegramSrc} className={styled.svg} />
					</a>
					{hoverEl === 'telegram' ? (
						<p className={styled.element}>{hoverEl}</p>
					) : (
						''
					)}
				</div>
				<div className={styled.block}>
					<a
						href='mailto: bik.big102rus@gmail.com'
						target='_blank'
						rel='noopener'
						onMouseMove={() => setHoverEl('email')}
						onMouseOut={() => setHoverEl('')}
					>
						<ReactSVG src={emailSrc} className={styled.svg} />
					</a>
					{hoverEl === 'email' ? (
						<p className={styled.elementMail}>{hoverEl}</p>
					) : (
						''
					)}
				</div>
				<div className={styled.block}>
					<a
						className={styled.link}
						href='https://wa.me/79191553309'
						target='_blank'
						rel='noopener'
						onMouseMove={() => setHoverEl('whatsapp')}
						onMouseOut={() => setHoverEl('')}
					>
						<ReactSVG src={whatsappSrc} className={styled.svg} />
					</a>
					{hoverEl === 'whatsapp' ? (
						<p className={styled.element}>{hoverEl}</p>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}
