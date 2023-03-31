export default function Edit() {
    return (
        <section className="edit-form-container">
            <form action="">
                <h3>Edit Book Review</h3>
                <label>Title</label>
                <input
                    type="text"
                    name=""
                    className="box"
                    defaultValue="Harry Potter and the Philosopher's Stone"
                    id=""
                />
                <label>Author</label>
                <input
                    type="text"
                    name=""
                    className="box"
                    defaultValue="JK Rowling"
                    id=""
                />
                <label>Genre</label>
                <input type="text" name="" className="box" defaultValue="Fantasy" id="" />
                <label>Stars</label>
                <input type="number" name="" className="box" defaultValue={5} id="" />
                <label>Image</label>
                <input type="text" name="" className="box" defaultValue="http:..." id="" />
                <label>Review</label>
                <textarea
                    className="box"
                    name=""
                    defaultValue={
                        "Harry Potter and the Philosopher's Stone is one of my favourite books in the Harry Potter series. Reading this book has made me crazy about Harry Potter and I wish to be one among the magical community. I can't imagine how thrilled I would be if I get a letter from Dumbledore saying that I am admitted to Hogwarts!!!!!!!"
                    }
                />
                <input type="submit" defaultValue="Edit" className="btn" />
            </form>
        </section>
    )
}