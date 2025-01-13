import { supabase } from "./supabase"

export const InsertRow = (props) => {
  const { title, time } = props
  const handleInsert = async () => {
    try {
      const { data, error } = await supabase
        .from("study-record")
        .insert([{ title, time }])
        .select();

      if (error) {
        console.error("データの挿入中にエラーが発生しました:", error.message);
      }
    } catch (err) {
      console.error("予期しないエラーが発生しました:", err.message);
    }
  };
  return handleInsert()
}

export const DeleteRow = (id) => {
  console.log(id)
  const handleDelete = async () => {
    const { error } = await supabase
      .from('study-record')
      .delete()
      .eq('id', id)
  }
return handleDelete();
}