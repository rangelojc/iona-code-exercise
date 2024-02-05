const Shadow = (props: any) => {
    return (
        <>
            {
                props.show ? props.children : <></>
            }
        </>
    )
}

export default Shadow