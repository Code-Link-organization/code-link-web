/* eslint-disable react/prop-types */
import closeIcon from "../../assets/images/chat/icons8-close-50 1.svg";

function PostOptions({ uploadedImage, setUploadedImage }) {
    const removeImageHandler = () => {
        setUploadedImage(null);
    };
    return (
        <div className="py-5 h-28 flex flex-row-reverse">
            <div className="ml-auto w-fit space-x-3 text-2xl">
                <button>Post Privacy</button>
                <button className="dark-btn">Public</button>
            </div>
            {uploadedImage && (
                <div className="relative my-auto w-24">
                    <img
                        src={URL.createObjectURL(uploadedImage)}
                        alt="uploaded image"
                        className="w-full h-18"
                    />
                    <button
                        className="w-6 h-6 bg-custombg border-2 text-xs rounded-full absolute right-[-10px] top-[-10px] element-center"
                        onClick={removeImageHandler}
                    >
                        <img className="w-[10px] h-[10px]" src={closeIcon} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default PostOptions;
