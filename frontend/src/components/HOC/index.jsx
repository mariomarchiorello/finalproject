export const withAuth = (WrappedComponent) => {
    return (props) => {
        const token = localStorage.getItem('token')
        if(token) {
            return <WrappedComponent />
        }else {
            props.history.push('/sign-in', token)
            return null
        }
    }
}
