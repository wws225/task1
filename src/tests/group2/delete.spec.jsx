import App from "../../App";
import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";

test("削除ボタンを押すと学習記録が削除される",
  async () => {

    render(<App />)

    //テーブルが表示されるまで待機
    await screen.findByTestId('table')

    const beforLength = screen.getAllByTestId("list-item").length;

    const deleteButton = screen.getByTestId("Test");

    // フォームを送信
    await fireEvent.click(deleteButton);

    //データの更新反映まで待機
    await screen.findByTestId('load')
    await screen.findByTestId('table')

    //更新後の件数取得
    const afterLength = screen.getAllByTestId("list-item").length;
    //結果を確認
    expect(afterLength).toBe(beforLength - 1);

  })