const CollIcon = ({ items, id }) => {

    return (
        <>
            {items.some(el => el === id) ? ' ( - )' : ' ( + )'}
        </>
    )
}
export default CollIcon