import React, { useContext } from "react";
import LoadData from "../func/LoadData";
import { GlobalContext } from "../../providers/GlobalState";
import { DeleteRow } from "../../utils/supabaseFunctions";
import { TotalTime } from "./TotalTime";

export const TableView = () => {
  const { setReload } = useContext(GlobalContext)

  const onClick = async (id) => {
    await DeleteRow(id)
    setReload((prev) => !prev)
  }

  const { data,loading, error } = LoadData();
  if (error) return <p>エラー: {error}</p>;
  if (loading) return <p>Loading・・・</p>
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          {item.title} {item.time}時間
          <button onClick={() => onClick(item.id)}>削除</button>
        </div>
      ))}
    <TotalTime data={data}/>
    </>
  );
};
