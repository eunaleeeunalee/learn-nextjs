import { URL } from "../app/(home)/page";

async function getInfo(id:string){
    const response = await fetch(`${URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: {id:string}){
    const info = await getInfo(id);

    return <h4>{JSON.stringify(info)}</h4>
}