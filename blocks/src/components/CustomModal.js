import { Modal, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const CustomModal = ({ buttonText, modalTitle, children }) => {
	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );
	
	return (
		<>
			<Button variant="secondary" onClick={ openModal } style={ { marginBottom: '1rem' } }>
				{ buttonText }
			</Button>
			
			{ isOpen && (
				<Modal title={ modalTitle } onRequestClose={ closeModal }>
					{ children }
					
					<Button variant="secondary" onClick={ closeModal } style={ { marginTop: '1rem' } }>
						Close
					</Button>
				</Modal>
			) }
		</>
	);
};

export default CustomModal;
