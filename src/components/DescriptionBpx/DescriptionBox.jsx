import "./DescriptionBox.css";

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigtor">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
                    repellendus vel! Ex, sunt saepe debitis, aliquid nostrum odit ducimus
                    porro libero cum possimus tenetur aliquam maiores cupiditate, error
                    vero natus.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
                    nostrum maiores adipisci corporis veniam culpa quos aperiam eum ipsam
                    ad?
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
