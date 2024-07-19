import './App.css'
import { Avatar } from './components/Avatar'
import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'

function App() {
	return (
		<div className='container'>
			<section className='content'>
				<LeftMenu />
				<div className='center'>
					<p className='name'>РУСЛАН БИКМЕТОВ</p>
					<p className='special'>frontend react developer</p>
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
		</div>
	)
}

export default App
