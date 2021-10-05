export default class SweetAlert{
    successLarge(message){
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
     
    }
    successSmall(message){
       toast.fire({
          type: 'success',
          title: message
      })
    }

    warning(){
      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

    ask(message){
      swal.fire({
        title: message,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire(
            'Cancelled!',
            'The order has been cancelled.',
            'success'
          )
        }
      })
    }

    message(message){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      })
    }

    error(message){
      toast.fire({
          type: 'error',
          title: message
      })
      // swal.fire({
      //   icon: 'error',
      //   title: 'Oops... Try again!',
      //   text: message,
      // })
    }
}
