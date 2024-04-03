
export const CounterMock = {
    getValue: _ => new Promise((success) => {
        return setTimeout(() => {
            return {
                data: {
                    value: 0
                }
            }
        }, 3000)
    })

}