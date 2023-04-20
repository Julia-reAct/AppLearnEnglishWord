import swal from 'sweetalert'

const ShowSuccessMessage=()=> {
        swal({
            title: 'Good job!',
            text: 'You Learn all word at the list!',
            icon: 'success'
        })

}
export default ShowSuccessMessage;