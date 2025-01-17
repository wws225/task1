import React , { useContext } from "react"
import { GlobalContext } from "../../providers/GlobalState"

export const InputInfo =()=>{
    const {title} = useContext(GlobalContext)
    const {time} = useContext(GlobalContext)
    return (
        <> 
        <div>入力されている学習内容：{title}</div>
        <div>入力されている時間：{time}時間</div>
        </>
    )

}