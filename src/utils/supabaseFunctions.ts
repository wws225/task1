import {supabase} from "./supabase"
export const getAllTable = async () =>{
const table = await supabase.from("study-record").select("*")
return table

}