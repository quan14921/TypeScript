
import { CategoryType } from "../pages/types/category";
import instance from "./instance";

export const listcate = () => {
    const url = `/categorys`;
    return instance.get(url);
}
export const removecate = (id:string) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
}
export const addcate = (category:CategoryType) => {
    const url = `/categorys`;
    return instance.post(url, category);
}
export const showcate = (id : number)=>{
    const url = `/categorys/${id}`;
    return instance.get(url);
}

