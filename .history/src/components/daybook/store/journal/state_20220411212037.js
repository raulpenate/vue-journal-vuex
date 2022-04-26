export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: '',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Excepteur ullamco eiusmod duis minim ea dolor enim nisi enim dolore consequat commodo ullamco nisi. Esse quis sit amet ea. Esse pariatur ea non pariatur fugiat ut.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Excepteur ullamco eiusmod duis minim ea dolor enim nisi enim dolore consequat commodo ullamco nisi. Esse quis sit amet ea. Esse pariatur ea non pariatur fugiat ut.',
            picture: null,
        }
    ],
})