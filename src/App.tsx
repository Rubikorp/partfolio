import './App.css'
import { useState, useEffect } from 'react'
import { Avatar } from './components/Avatar'
import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Contacts } from './components/Contacts'

function App() {
	const [modal, setModal] = useState('')
	const [openModal, setOpenModal] = useState(false)

  useEffect(()=> {
    if (modal==='') {
      setOpenModal(false)
    }
  }, [modal])

	return (
		<div className='container'>
			<section className='content'>
				<LeftMenu />
				<div className='center'>
					<h1 className='name'>РУСЛАН БИКМЕТОВ</h1>
					<h2 className='special'>frontend react developer</h2>
					<Avatar />
				</div>
				<RightMenu />
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
			{modal==='aboutMe' && openModal ? () : ''}
      {modal==='skills' && openModal ? () : ''}
      {modal==='exp' && openModal ? () : ''}
      {modal==='portfolio' && openModal ? () : ''}

			<footer className='footer'>
				<Contacts />
			</footer>
		</div>
	)
}

export default App
