import Button from "../components/atoms/Button"
import InputField from "../components/atoms/InputField"
import { useEffect, useRef, useState } from "react"
import { CountDownTimer } from "../components/organisms/CountdownTimer";
import { Header } from "../components/organisms/Header";
import { supabase } from "../util/supabase";

export default function Home() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [theme, setTheme] = useState('');
  const [contents, setContents] = useState('');
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isContentsDisplay, setIsContentsDisplay] = useState(false);
  const [submitContents, setSubmitContents] = useState([]);
  const handleTheme = (e) => {
    const targetValue = e.target.value;
    setTheme(targetValue);
  };
  const clickevent = () => {
    console.log("click!!!!!");
    setInputDisabled(false);
    setButtonDisabled(true);
    setIsContentsDisplay(true);
  };
  const themeRef = useRef(theme);
  const submit = async () => {
    const newSubmitContents = [...submitContents];
    const insertContents = newSubmitContents.map((item) => item.contentsName);
    await supabase.from("contents").insert({ theme: theme, value: insertContents });
    setContents("");
    setInputDisabled(true);
    setIsContentsDisplay(false);
    setSubmitContents([]);
    console.log(themeRef.current);
    setTheme("");
    // themeRef.current.value = "";/
    console.log(theme);
  }
  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      console.log(contents);
      console.log("enter!!");
      if (e.target.value !== "") {
        setSubmitContents([...submitContents, { contentsName: contents }])
      }
      e.target.value = ""
    }
  }
  const handleContents = (e) => {
    const targetValue = e.target.value;
    setContents(targetValue);
    console.log(contents);
  }
  useEffect(() => {
    console.log(theme);
    if (theme !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    console.log(buttonDisabled);
  }, [theme]);
  return (
    <>
      <Header />
      <div className="text-center">
        <InputField
          placeholder={"テーマを入力してください！"}
          value={theme}
          onChange={handleTheme}
          ref={themeRef}
        />
        <Button
          disabled={buttonDisabled}
          value="設定する"
          onClick={clickevent}
        />
        {isContentsDisplay ?
          <>
            <CountDownTimer
              setInputDisabled={setInputDisabled}
            />
            <InputField
              placeholder={"内容を入力してください！"}
              value={contents}
              onChange={handleContents}
              disabled={inputDisabled}
              onKeyDown={handleKeydown}
            />
            <div className="border-2 rounded-md border-green-200 w-2/3 h-auto mx-auto my-3 py-3 px-10">
              <label htmlFor="" className="text-4xl border-b-2 border-gray-400 my-3">テーマ: {theme}</label>
              {submitContents.map((item, i) =>
                <ul className="text-left">
                  <li key={i} className="text-2xl w-full  border-b-2 border-gray-40">{item.contentsName}</li>
                </ul>
              )}
            </div>
            <Button
              value="新しく始める"
              onClick={submit}
            />
          </>
          : ""}


      </div>

    </>
  )
}
