import { useEffect, useState } from 'react'
import './App.css'
import { Avatar } from './components/Avatar'
import { Contacts } from './components/Contacts'
import { LeftMenu } from './components/LeftMenu'
import { ModalAboutMe } from './components/modal/ModalAboutMe'
import { ModalExp } from './components/modal/ModalExp'
import { ModalPort } from './components/modal/ModalPort'
import { ModalSkills } from './components/modal/ModalSkills'
import { RightMenu } from './components/RightMenu'
import { TModal } from './types/typesModal'

function App() {
	const [modal, setModal] = useState<TModal>('')
	const [openModal, setOpenModal] = useState<boolean>(false)

	useEffect(() => {
		if (modal === '') {
			setOpenModal(false)
		}
	}, [modal])

	return (
		<div className={`container ${openModal && `open_modal`}`}>
			<section className='content'>
				<h1 className='name'>РУСЛАН БИКМЕТОВ</h1>
				<h2 className='special'>frontend react developer</h2>
				<div className='btn-container-mobile'>
					<a
						href='https://ufa.hh.ru/resume/e1fdae85ff0d10097b0039ed1f634c74353833'
						target='_blank'
						className='btn-a-mobile'
					>
						РЕЗЮМЕ
					</a>
				</div>
				<div className='content__center'>
					<LeftMenu setModal={setModal} setOpenModal={setOpenModal} />
					<div className='center'>
						<Avatar setModal={setModal} setOpenModal={setOpenModal} />
					</div>
					<RightMenu setModal={setModal} setOpenModal={setOpenModal} />
				</div>
				<div className='btn-container'>
					<a
						href='https://ufa.hh.ru/resume/e1fdae85ff0d10097b0039ed1f634c74353833'
						target='_blank'
						className='btn-a'
					>
						РЕЗЮМЕ
					</a>
				</div>
				{modal === 'aboutMe' && openModal ? (
					<ModalAboutMe setModal={setModal} setOpenModal={setOpenModal} />
				) : (
					''
				)}
				{modal === 'skills' && openModal ? (
					<ModalSkills setModal={setModal} setOpenModal={setOpenModal} />
				) : (
					''
				)}
				{modal === 'exp' && openModal ? (
					<ModalExp setModal={setModal} setOpenModal={setOpenModal} />
				) : (
					''
				)}
				{modal === 'portfolio' && openModal ? (
					<ModalPort setModal={setModal} setOpenModal={setOpenModal} />
				) : (
					''
				)}

				<footer className='footer'>
					<Contacts />
				</footer>
			</section>
		</div>
	)
}

export default App
