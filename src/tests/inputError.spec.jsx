import App from "../App";
import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";

test("フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている",
  async () => {

    // フォームコンポーネントをレンダリング
    render(<App />)

    //テーブルが表示されるまで待機
    await screen.findByTestId('table')

    // 入力要素とボタンを取得
    const submitButton = screen.getByTestId("submit-button");

    // フォームを送信
    await fireEvent.click(submitButton);

    //結果を比較
    const errorView =await screen.getByTestId("error");
    const text ="入力されていない項目があります。"
    expect(errorView).toHaveTextContent(text)

  })