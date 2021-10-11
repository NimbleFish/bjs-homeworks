import Card from "./Card";
import img from './img/img.jpg';

export default function App() {
  const arr = [
    { 'img': img, 'title': 'Card title', 'content': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { 'img': '', 'title': 'Special title tratment', 'content': 'With supporting text below as a natural lead-in to additional content.' },
    { 'title': 'Майкл Делл рассказал, что Джобс хотел предложить Dell лицензировать софт Apple', 'content': 'Основатель и руководитель компании Dell Майкл Делл рассказал, что Стив Джобс хотел предложить Dell лицензировать софт Apple, а именно macOS. Деллу предложение…' }
  ];
  return arr.map((el, i) => <Card key={i} data={el} />);
}