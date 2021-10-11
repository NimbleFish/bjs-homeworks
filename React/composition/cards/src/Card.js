export default function Card(props) {
    return (
        <div className="card">
            {props.data.img ? <img src={props.data.img} alt="img" /> : null}
            <div className="title">{props.data.title}</div>
            <div className="content">{props.data.content}</div>
        </div>
    );
}