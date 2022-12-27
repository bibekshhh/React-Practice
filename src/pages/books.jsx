
export const Book = ({id}) => {

    return(
        <>
        <div className="book">
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQiooqbJZ9iG3cFmLMNMIhiU4Yhu-otTrnA&usqp=CAU"></img>
            </div>
            <div className="caption">
                <span>The Outside</span>
                <span>Book ID: {id}</span>
            </div>
        </div>
        </>
    )
}