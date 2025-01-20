import App from "../../App";
import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";

test("フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている",
  async () => {

    // フォームコンポーネントをレンダリング

    render(<App />)

    //テーブルが表示されるまで待機
    await screen.findByTestId('table')
    const beforLength = screen.getAllByTestId("list-item").length;

    // 入力要素とボタンを取得
    const submitButton = screen.getByTestId("submit-button");
    const inputElementByTitle = screen.getByTestId('title-input');
    const inputElementByTime = screen.getByTestId('time-input');
    // 入力フィールドに値を入力
    fireEvent.change(inputElementByTitle, { target: { value: 'Test' } });
    fireEvent.change(inputElementByTime, { target: { value: '5' } });
    // 入力値を検証
    expect(inputElementByTitle.value).toBe('Test');
    expect(inputElementByTime.value).toBe('5');

    // フォームを送信
    await fireEvent.click(submitButton);

    //データの更新反映まで待機
    await screen.findByTestId('load')
    await screen.findByTestId('table')

    //更新後の件数取得
    const afterLength = screen.getAllByTestId("list-item").length;
    //結果を比較
    expect(afterLength).toBe(beforLength + 1);

  })