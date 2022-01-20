import React from "react";
import DateTime from "./DateTime";

const realDate = new Date();

export default function DateTimePretty(props) {
    const parsedDate = props.date.split(' ');
    const dateParse = parsedDate[0].split('-').reverse();
    const timeParse = parsedDate[1].split(':');
    let date;

    // Если всё равно нулям, значит прошло меньше суток
    date = ( (realDate.getDate() - dateParse[0]) == 0 &&
         (realDate.getMonth() + 1 -dateParse[1]) == 0 &&
         (realDate.getFullYear() - dateParse[2] == 0)
        ) ?
        realDate.getHours() - timeParse[0] !== 0 ?
            (realDate.getHours() - timeParse[0]) + " часов назад" :
            (realDate.getMinutes() - timeParse[1]) + " минут назад"
        : date = Math.ceil(Math.abs((realDate.getTime() - new Date(parsedDate[0]).getTime()) / (1000 * 3600 * 24))) + " дней назад";

    return class extends React.Component {
        render() {
            return <DateTime date={date} />;
        }
    }
}