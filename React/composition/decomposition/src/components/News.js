export default function News(props) { // Рендерит новостную ленту
    return (
        <ul className="news">
            { props.news.map((el, i) => <li className="new" key={i}><img src={props.imgs[i]} alt="new_image" /><span>{el.text}</span></li>) }
        </ul>
    )
}