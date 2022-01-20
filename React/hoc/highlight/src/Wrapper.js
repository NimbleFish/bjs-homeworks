import Popular from "./Popular";
import New from "./New";

export default function Wrapper(props) {
    return props.count > 100 ? <Popular>{props.element}</Popular> : <New>{props.element}</New>;
}