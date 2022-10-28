import { Nav } from './component'
import img from './constant'

function App() {
  const { btn1, btn2, githup, slack, profile_img, zurilogo, I4GLogo } = img
  return (
    <div className="p-4">
      <div className="flex justify-around items-start">
        <h1></h1>
        <div className="">
          <img src={profile_img} alt="" className="mx-auto" />
          <caption className="flex text-lg font-semibold">
            Annette Black
          </caption>
        </div>
        <a href="#">
          <img src={btn2} alt="btn" className="hidden md:block" />
          <img src={btn1} alt="btn" className="block md:hidden" />
        </a>
      </div>

      <Nav />

      <div className="flex justify-center space-x-5">
        <a href="#" id="slack">
          <span class="sr-only">I_Am_DanielIkpe</span>
          <img src={slack} alt="slack" />
        </a>

        <a href="https://github.com/ikpeku" target="_blank">
          <img src={githup} alt="githup" />
        </a>
      </div>
      <div className="md:flex justify-between space-y-5 mt-16 border-t-2 border-gray-200 w-5/6 mx-auto py-3">
        <a href=' https://training.zuri.team/' target="_blank" >
          <img src={zurilogo} alt="logo" />
        </a>
       
        <p>HNG Internship 9 Frontend Task</p>
        <a href="https://ingressive.org/">
          <img src={I4GLogo} alt="logo" />
        </a>
        
      </div>
    </div>
  )
}

export default App
