import Button from "../components/atoms/Button"
import InputField from "../components/atoms/InputField"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [buttonDisabled,setButtonDisabled] = useState(true);
  const [theme,setTheme] = useState('');
  const [contents,setContents] = useState('');
  const [inputDisabled,setInputDisabled] = useState(true);
  const inputRef = useRef();
  const handleTheme = (e) => {
    const targetValue = e.target.value;
    setTheme(targetValue);
  };
  const clickevent = () => {
    console.log("click!!!!!");
    setInputDisabled(false);
  };
  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      console.log(contents);
      console.log("enter!!");
      inputRef.current.value = "";
    }
  }
  const handleContents = (e) => {
    const targetValue = e.target.value;
    setContents(targetValue);
    console.log(contents);
  }
  useEffect(()=> {
    console.log(theme);
    if(theme !== "") {
      setButtonDisabled(false);
    }else {
      setButtonDisabled(true);
    }
    console.log(buttonDisabled);
  },[theme]);
  return (
    <>
      <header className="bg-green-500 w-full h-20 flex justify-center items-center">
        <span className="text-white text-2xl">zero tinkings</span>
      </header>
      <div className="text-center">
        <InputField
          placeholder={"テーマを入力してください！"}
          value={theme}
          onChange={handleTheme}
        />
        <Button
          disabled={buttonDisabled}
          value="設定する"
          onClick={clickevent}
        />
        <InputField
          placeholder={"内容を入力してください！"}
          value={contents}
          onChange={handleContents}
          disabled={inputDisabled}
          onKeyDown={handleKeydown}
          ref={inputRef}
        />
      </div>

    </>
  )
}
