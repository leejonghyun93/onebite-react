import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate,onDelete}) => {
    
    const onChageChaeckBox = () => {
        onUpdate(id);
    };

    const onClickDelteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChageChaeckBox} checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelteButton}>삭제</button>
        </div>
    );
};

export default TodoItem;