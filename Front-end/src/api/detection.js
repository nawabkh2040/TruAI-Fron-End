import api from "./axios";


export const checkImage = async (file)=>{

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await api.post("/check_image", formData);
        return response.data;
    } catch (error) {
        console.error("Error checking image:", error);
        throw error;
    }
}

export const checkVideo = async (file)=>{

    const formData = new FormData();
    formData.append("file", file);
    try {
        const response = await api.post("/check_video", formData);
        return response.data;
    } catch (error) {
        console.error("Error checking video:", error);
        throw error;
    }   
}