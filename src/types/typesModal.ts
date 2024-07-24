type TModal = '' | 'aboutMe' | 'exp' | 'skills' | 'portfolio'

interface IPropsModal {
	setModal: React.Dispatch<
		React.SetStateAction<'' | 'aboutMe' | 'exp' | 'skills' | 'portfolio'>
	>
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type { TModal, IPropsModal }
