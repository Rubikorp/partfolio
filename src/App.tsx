import './App.css'
import { useState, useEffect } from 'react'
import { Avatar } from './components/Avatar'
import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Contacts } from './components/Contacts'
import { ModalExp } from './components/modal/ModalExp'
import { ModalPort } from './components/modal/ModalPort'
import { ModalSkills } from './components/modal/ModalSkills'
import { ModalAboutMe } from './components/modal/ModalAboutMe'
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
		<div className='container'>
			<section className='content'>
				<LeftMenu setModal={setModal} setOpenModal={setOpenModal} />
				<div className='center'>
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
					<Avatar setModal={setModal} setOpenModal={setOpenModal}/>
				</div>
				<RightMenu setModal={setModal} setOpenModal={setOpenModal} />
			</section>

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
		</div>
	)
}

export default App
