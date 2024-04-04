const ApiMock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    label: {
                        fr: 'Salut',
                        en: 'Hi'
                    }
                }
            })
        }, 2000)
    })
}
export default ApiMock