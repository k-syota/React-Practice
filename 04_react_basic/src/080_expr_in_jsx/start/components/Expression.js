import './Expression.css'

export const Expression = () => {
    const title = 'Expression'
    const arr = ['item1','item2','item3','item4']
    const hello = (arg) => {
        return `${arg} Function`
    }
    return(
        <>
        <div className={title.toLowerCase()}>
            <h1>Hello {title}</h1>
            <h3>{arr}</h3>
            <h3>{hello('Hello')}</h3>
        </div>
        </>
    )
}
