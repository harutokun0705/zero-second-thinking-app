import { useEffect, useState } from "react"
import { Header } from "../components/organisms/Header"
import { supabase } from "../util/supabase"
export default function mypage() {
  const [contentsState, setContentsState] = useState([{ theme: "てすと", contents: ["あいうえお", "abcde"] }]);
  console.log(setContentsState);
  useEffect(() => {
    fetchTodos()
  }, [])
  const fetchTodos = async () => {
    let { data: todos } = await supabase.from('contents').select('*').order('id', true)
    console.log(todos);
  }
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl mt-10">過去のゼロ秒思考一覧</h1>
      {contentsState.map((item, i) =>
        <div className="border-2 rounded-md border-green-200 w-2/3 h-auto mx-auto my-3 py-3 px-10">
          <label htmlFor="" className="text-4xl border-b-2 border-gray-400 my-3">テーマ: {item.theme}</label>
          <ul className="text-left">
            {contentsState[i].contents.map((item, index) => {
              return (
                <li key={index} className="text-2xl w-full  border-b-2 border-gray-40">{item}</li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}