function Stars({ count }) {
    if (count < 1 || count > 5 || typeof(count) !== 'number') return null;
    let arr = Array(count).fill(null);
    return (
        <ul className="card-body-stars u-clearfix">
            {
                arr.map((el, i) => {
                    return (
                        <li key={i}>
                            <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                        </li>
                    )
                })
            }
        </ul>
    )
}

Stars.defaultProps = { count: 0 }

export default Stars;