import Video from "./Video";
import Article from "./Article";
import Wrapper from "./Wrapper";

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return <Wrapper count={item.views} element={<Video {...item} />} />;

            case 'article':
                return <Wrapper count={item.views} element={<Article {...item} />} />;
        }
    });
};