const initialState = {
    'list': [
        {
            "id": 0,
            "text": "Hello world!",
            "number": 12000
        },
        {
            "id": 1,
            "text": "Ну и ну",
            "number": 1000
        },
        {
            "id": 3,
            "text": "Проверка",
            "number": 1
        }
    ],
    'filter': []
}

export default function reducer(state = initialState, action) {
    switch (action.type)
    {
        case 'ADD':
            return Object.assign({}, state, { "list": [ ...state.list, action.payload ] });

        case 'REMOVE':
            return Object.assign({}, state, { "list": state.list.filter(el => el.id !== action.payload.id) });

        case 'F_ADD':
            return Object.assign({}, state, { "filter": [ ...state.filter, ...action.payload ] });

        case 'F_CL':
            return Object.assign({}, state, { "filter": [] });

        case 'F_FL':
            return Object.assign({}, state, { "filter": [{ 'id': null, 'text': null, 'number': null }] });

        default:
            return state;
    }    
}