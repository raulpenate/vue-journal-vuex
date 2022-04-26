
const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', ' Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

const getDayMonthYear = ( dateString ) => {
    
      const date = new Date(this.entry.date);

      return {
          day: date.getDate(),
          month: month[ date.getMonth() ],
          yearDay: `${date.getFullYear()}, ${days[ date.getDay() ]}`,
      }
}