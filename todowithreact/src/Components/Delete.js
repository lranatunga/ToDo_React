import deleteImage from '../images/delete.png';

function DeleteButton (props){
    return(
        <img img className='delete-img' src={deleteImage} alt="delete" onClick={props. handleDelete}/>
    )
}

export default DeleteButton