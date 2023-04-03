import { useForm } from "../../../hooks/useForm";



export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form"onSubmit={onSubmit}>
                <div className="box">
                <textarea  name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                </div>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
};