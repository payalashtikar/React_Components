import React, { useEffect, useState } from 'react';

const ImageUploading = () => {
    const [image, setImage] = useState('');

    const uploadImage = async (options) => {
        const { file } = options;
        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset', 'payal_cloudinaryImage');
        data.append('cloud_name', 'dmodq8klr');

        try {
            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dmodq8klr/image/upload',
                {
                    method: 'POST',
                    body: data,
                }
            );
            if (!response.ok) {
                throw new Error('Image upload failed');
            }
            const responseData = await response.json();
            setImage(responseData.url);

            // Calling submitImage when the image is successfully uploaded
            submitImage(responseData.url);
        } catch (error) {
            console.error('Error uploading image:', error.message);
        }
    };

    const submitImage = (imageUrl) => {
        // Customize this function based on your application's needs
        console.log('Image submitted:', imageUrl);
        // Here, you might want to send the imageUrl to a server, update state, or perform other actions.
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadImage({ file });
        }
    };

    useEffect(() => {
        // You can perform additional actions when 'image' state changes
        // For example, update the UI or send the image URL to a server
        setImage(image)
    }, [image]);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Image Uploading</h1>
            <input type="file" onChange={handleFileChange} placeholder="Choose image" />
            {/* <button onClick={submitImage}>submitImage</button> */}
            <div>{image && <img src={image} alt="" style={{ width: "100px", height: "120px" }} />}</div>
            <h3></h3>
        </div>
    );
};

export default ImageUploading;
