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
  if (loading) return <p data-testid="load">Loading・・・</p>
  return (
    <ol data-testid="table"     >
      {data.map((item, index) => (
        <li key={index} data-testid="list-item">
          {item.title} {item.time}時間
          <button data-testid={item.title} onClick={() => onClick(item.id)}>削除</button>
        </li>
      ))}
    <TotalTime data={data}/>
    </ol>
  );
};
