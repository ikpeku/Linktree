import React from 'react'
import img from '../constant'
import { Nav } from '../component'

export const Home = () => {
    const { btn1, btn2, githup, slack, profile_img } = img
  return (
    <div>
                <div className="flex justify-around items-start">
          <h1>
            <span className="sr-only">I_Am_DanielIkpe</span>
          </h1>
          <div className="">
            <img
              src={profile_img}
              id="profile__img"
              alt=""
              className="mx-auto"
            />
            <h3 className="flex text-lg font-semibold">
              Annette Black
            </h3>
          </div>
          <button>
            <img src={btn2} alt="btn" className="hidden md:block" />
            <img src={btn1} alt="btn" className="block md:hidden" />
          </button>
        </div>

        <Nav />

        <div className="flex justify-center space-x-5">
          <button>
            <span className="sr-only">I_Am_DanielIkpe</span>
            <img id="slack" src={slack} alt="slack" />
          </button>

          <a
            href="https://github.com/ikpeku"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img id="githup" src={githup} alt="githup" />
          </a>
        </div>
    </div>
  )
}
