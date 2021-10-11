export default function News(props) {
    return (
        <ul className="news">
            {
                props.news.map((el, i) => <li className="new" key={i}><img src={el.img} alt="new_image" /><span>{el.text}</span></li>)
            }
        </ul>
    )
}