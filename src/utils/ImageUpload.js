export const ImageUpload = async(images) => {
    let imgArr = []

    for(const item of images){
        const formData = new FormData()
        formData.append('file', item)
        formData.append('upload_preset', 'dakucxz4')
        formData.append('cloud_name', 'daggokgzh')

        const res = await fetch('https://api.cloudinary.com/v1_1/daggokgzh/image/upload', {
            method: 'POST',
            body: formData
        })

        const data = await res.json()

        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }

    return imgArr;
}