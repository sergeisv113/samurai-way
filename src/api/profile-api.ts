import axios from 'axios';
import {FormProfileDataType} from "../components/Profile";
import {PhotosType, ProfileType} from "../redux/profile-reducer";
import {APIResponseType, instance} from "./api";


type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(res => res.data)
    },
    getStatus(userId: number | null) {
        return instance.get<string>(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfile(formData: FormProfileDataType) {
        return instance.put<APIResponseType>(`profile`, formData)
            .then(res => res.data)
    },
}


