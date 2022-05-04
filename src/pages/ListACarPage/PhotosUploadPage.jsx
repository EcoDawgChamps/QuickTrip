import { useEffect, useState } from "react";
import "./ListACarPage.css";

const PhotosUploadPage = ({
    setPhotos,
    setStepNum,
    stepNum
}) => {

    const [images, setImages] = useState([]);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const uploadImagesHandler = e => {
        let newFiles = [...images];
        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files.item(i));
        }
        // console.log(newFiles);
        setImages(newFiles);
    }

    useEffect(() => {
        setBtnDisabled(images.length === 0);
    }, [images]);

    const setFinalPhotos = () => {
        setPhotos(images);
        setStepNum(stepNum + 1);
    }

    return (
        <div>
            <div>
                <label htmlFor={"photos"}>Upload Photos</label><br/>
                <input type={"file"} multiple onChange={uploadImagesHandler} id={"photos"}/>
                <div className="image-container">
                {
                    images.length > 0 ? images.map(image => {
                        return (
                            <div className="image-preview">
                                <img alt="uploaded image" src={URL.createObjectURL(image)} />
                            </div>
                        )
                    }) : ""
                }
                </div>
                <div onClick={setFinalPhotos} disabled={btnDisabled} className={`list-button ${btnDisabled ? "disabled" : "enabled"}`}>
                    Safety and Quality Standards
                </div>
            </div>
        </div>
    )
}

export default PhotosUploadPage;