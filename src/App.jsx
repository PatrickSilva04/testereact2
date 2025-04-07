
// import  style from'./App.module.css'
import { Menu } from './Components/menu'


function App() {
  return (
    <>
     <Menu option1='sesao1' option2='sesao2' option3='sesao3' ></Menu>
     <main>
      <section id='s1'>
        <h2>sessao 1</h2>
      </section>
      <section id='s2'>
        <h2> sessao 2</h2>
      </section>
      <section id='s3'>
        <h2> sessao 3</h2>
      </section>
     </main>
     </>
  )
}

export default App
