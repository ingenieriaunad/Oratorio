const  useDate = () => {
    const date=new Date();
    const dayNumber=date.getDay();
    const time=date.toLocaleTimeString();
    const timeMilitary=date.toLocaleTimeString('en-US', { hour12: false });
    const days=[
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
    ];
    const formatter = new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const day=days[dayNumber];
    const formatDate=formatter.format(date).charAt(0).toUpperCase()+formatter.format(date).slice(1);
    return {
        day,
        formatDate,
        time,
        timeMilitary
    }
};
