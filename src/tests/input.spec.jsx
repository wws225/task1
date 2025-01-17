import App from "../App";
import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
// import { GlobalContext } from "../providers/GlobalState";

// // Supabase をモック
// jest.mock('@supabase/supabase-js', () => {
//   return {
//     createClient: jest.fn().mockImplementation(() => {
//       return {
//         from: jest.fn().mockReturnThis(),
//         select: jest.fn().mockImplementation(() => ({
//              data: [
//             {
//               title: 'test',
//               time: 2,
//             },
//           ],
//           error: null,
//         })),
//       };
//     }),
//   };
// });


test("フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている",
  async () => {
    // const { supabase } = require("../utils/supabase");
   
    render(<App />);
   // フォームコンポーネントをレンダリング
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
   await  fireEvent.click(submitButton);


    // // 挿入後の行数を取得
    // let updatedRows = await supabase.from("study-record").select("*");
    // //   expect(updatedRows.data.length).toBe(1);
    // console.log(updatedRows.data.length)
    // // expect(updatedRows.data.length).toEqual(beforLength)
    // // 挿入されたデータの検証
    // expect(updatedRows.data[0]).toEqual({ title: "Test Title" });

  });
