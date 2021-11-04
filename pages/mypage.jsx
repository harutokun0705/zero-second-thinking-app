import { useEffect } from "react"
import { Header } from "../components/organisms/Header"
import { supabase } from "../util/supabase"
export default function mypage() {
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    let { data: todos, error } = await supabase.from('contents').select('*').order('id', true)
    if (error) console.log('error', error)
    else console.log(todos, "aaaaa");
  }
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl mt-10">過去のゼロ秒思考一覧</h1>
    </>
  )
}

// export default mypage;