const Note = ({note}) => {
    return (
        <>
            <h3>{note.title} </h3>
            <p>{note.description}</p>
            <br/>
        </>
    )
}
export default Note