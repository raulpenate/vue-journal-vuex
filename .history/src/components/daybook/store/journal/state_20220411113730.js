export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date.toDateString()
        }
    ],
})