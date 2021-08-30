export const withAuth = (WrappedComponent) => {
    return (props) => {
        const token = localStorage.getItem('token')
        if(token) {
            return <WrappedComponent />
        }else {
            props.history.push('/', token)
            return null
        }
    }
}


export const withNoAuth = (WrappedComponent) => {
    return (props) => {
        const token = localStorage.getItem('token')
        if(!token) {
            return <WrappedComponent />
        }else {
            props.history.push('/start', token)
            return null
        }
    }
}