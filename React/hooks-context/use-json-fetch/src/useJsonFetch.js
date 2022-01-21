export default async function UseJsonFetch(props) {
    return fetch(`http://localhost:7070/${props}`)
    .then(d => d.json()).then(d => {
        if (props == 'error') throw new Error(d.status);
        if (props == 'data') return { "data": d.status, "loading": null, "error": null };
        if (props == 'loading') return { "data": null, "loading": d.status, "error": null };
    })
    .catch(error => { return { "data": null, "loading": null, "error": error.message } });
}