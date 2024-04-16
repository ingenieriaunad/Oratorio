const message=(type,message)=>{
    switch(type){
        case 'success':
        Swal.fire({
                position: 'top-end',
                toast   : true,
                text    : message,
                icon    : type,
                timer   : 3000,
                showConfirmButton: false,
            });
            break;
        case 'error':
        case 'info':
        case 'warning':
        Swal.fire({
                text: message,
                icon: type,
            });
            break;
        case 'confirmation':
        Swal.fire({
            text: message,
            icon: 'success',
        });
        break;
        case 'success-toast':
        Swal.fire({
            toast   : true,
            text    : message,
            timer   : 3000,
            position: 'top-end',
            icon    : 'success',
            showConfirmButton: false,
        });
        break;
        case 'warning-toast':
        Swal.fire({
            toast   : true,
            text    : message,
            timer   : 3000,
            position: 'top-end',
            icon    : 'warning',
            showConfirmButton: false,
        });
            break;
        case 'error-toast':
        Swal.fire({
                toast   : true,
                text    : message,
                timer   : 3000,
                position: 'top-end',
                icon    : 'error',
                showConfirmButton: false
            });
        break;
        case 'delete':
        return Swal.fire({
                title: 'Se va a eliminar un registro',
                icon : 'warning',
                html : message,
                showCancelButton  : true,
                confirmButtonColor: '#007bff',
                cancelButtonColor : '#dc3545',
                confirmButtonText : 'Eliminar',
                cancelButtonText  : 'Cancelar'
            });
            
    }    
}