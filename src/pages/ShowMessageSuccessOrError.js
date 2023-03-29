import swal from 'sweetalert'

const ShowSuccessMessage=(wordlistAsArray)=> {
    if (wordlistAsArray.length === 0) {
        swal({
            title: "Good job!",
            text: "You Learn all word at the list!",
            icon: "success"
        })
    }
    else{
        swal({
            title: "Good job!",
            text: "You write word success!",
            icon: "success"
    });
    }
}
 const ShowErrorMessage=()=>{
    swal({
        title: "Oops",
        text: "Something went wrong!",
        icon: "error"
    });
}
export {ShowErrorMessage, ShowSuccessMessage}