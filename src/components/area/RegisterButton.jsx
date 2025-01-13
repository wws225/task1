import { useContext, useState } from "react";
import { GlobalContext } from "../../providers/GlobalState";
import { InsertRow } from "../../utils/supabaseFunctions";


export const RegisterButton = () => {
    const [error, setError] = useState("");
    const { title, time, setTitle, setTime, setReload } = useContext(GlobalContext)

    const OnClick = async () => {
        if (title === "" && time === 0) {
            setError("入力されていない項目があります。");
            return;
        }
        await InsertRow({ title, time })
        setReload((prev) => !prev)
        setTitle("");
        setTime(0);
        setError("")
    }
    return (
        <>
            <button
                onClick={OnClick}>登録</button>
            <div>{error}</div>
        </>
    )
}