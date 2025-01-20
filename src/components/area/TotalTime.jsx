import React, { useMemo } from "react";

export const TotalTime = (props) => {
  const {data} = props;
  // 合計時間を計算 (dataが存在する場合のみ)
  const totalTime = useMemo(() => {
    if (!data || data.length === 0) return 0; // tableが空の場合は0を返す
    return data
      .map((row) => Number(row.time)) // timeを数値に変換
      .reduce((sum, item) => sum + item, 0); // 合計値を計算
  }, [data]); // tableが変更されたときのみ再計算

  return (
    <div>
      合計時間：{totalTime}/1000(h)
    </div>
  );
};