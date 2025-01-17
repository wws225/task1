import React , { useContext } from "react"
import { InputInfo } from "./InputInfo"
import { GlobalContext } from "../../providers/GlobalState"

export const InputArea = () => {
    const { title, setTitle } = useContext(GlobalContext)
    const { time, setTime } = useContext(GlobalContext)
    return (
        <>
            <InputRow
                value={title}
                label1="学習内容："
                label2=""
                inputType="text"
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                id="title-input"
            />
            <InputRow
                value={time}
                label1="学習時間："
                label2="時間"
                inputType="number"
                onChange={(e) => {
                    setTime(e.target.value)
                }}
                id="time-input"
            />
            <InputInfo />
        </>
    )
}


const InputRow = (props) => {
    const { value, label1, label2, inputType, onChange ,id} = props;
    return (
        <div>
            <label>{label1}</label>
            <input type={inputType}
                value={value}
                onChange={onChange}
                data-testid={id}
            />
            <label>{label2}</label>
        </div>
    )
}