import Modal from 'react-modal';
import AdminBlogForm from '../admin/AdminBlogForm';

Modal.setAppElement("#root");

export default function BlogModal (props) {

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            height: "80vh"
        },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.75)"
        }
    };

    const handleFormSubmission = (blog) => {
        props.handleNewBlogSubmission(blog);
    }

    return (
        <Modal
            style={customStyles}
            onRequestClose={() => {
                props.handleModalClose();
            }}
            isOpen={props.modalIsOpen}>

            <AdminBlogForm handleFormSubmission={handleFormSubmission}/>
        </Modal>
    );
};