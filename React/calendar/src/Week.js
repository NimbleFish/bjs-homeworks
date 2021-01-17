function Week(props) {
  const {days, step, step_to, data, getDayOfWeek} = props, date = new Date().getDate();
  return (
    days.map((index, elem) => {
      if (step <= index && index <= step_to) {
        if (elem == date) {
          return <td className="ui-datepicker-today" key={index}>{elem}</td>;
        } else {
          return <td key={index}>{elem}</td>;
        }
      }
    })
  )
}

export default Week;
