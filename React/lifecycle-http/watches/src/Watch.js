import { useEffect } from "react";
import getTime from './getTime';

export default function Watch(props) {
    useEffect(() => {
        const id = setInterval(() => props.clocks.forEach(el =>
            props.changeClocks( pS => ([ ...pS.filter(e => e.timeZone !== el.timeZone),
                { ...pS.filter(e => e.timeZone === el.timeZone)[0], 'time': getTime(el.timeZone) } ]) ) ), 1000);

        return () => clearInterval(id);
    });
    return null;
}