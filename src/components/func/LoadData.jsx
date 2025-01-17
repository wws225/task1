import { useContext, useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { GlobalContext } from "../../providers/GlobalState";


export const LoadData = () => {
    const { reload } = useContext(GlobalContext)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // ローディング状態
    const [data, setData] = useState([{ id:"",title: "", time: 0 }])
   
    useEffect(() => {
        // テーブルの初期データを取得

        const fetchInitialData = async () => {
            try {
                setLoading(true); // ローディング開始
                const { data: initialData, error } = await supabase.from("study-record").select("*");
                if (error) {
                    setError(error.message);
                } else {
                    setData(initialData);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // ローディング終了
            }
        };

        fetchInitialData();
    }, [reload]);
    return {data, loading, error };
};

export default LoadData;
