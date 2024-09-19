import "./Viewer.css";

const Viewer = () => {

    const emotionId = 1;

    return (
        <div className="Viewer">
            <seaction className="img_section">
                <h4>오늘의 감정</h4>
                <div>
                <img src={""} />
                </div>
                </seaction>
                <seaction className="content_section"></seaction>
        </div>
    );
}

export default Viewer;