const TestLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <p>Sidebar</p>
            {children}
        </div>
    )
}

export default TestLayout