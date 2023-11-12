'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className="mt-4 text-white">
      <div className="flex-col space-y-3 py-8 text-3xl font-semibold leading-tight pr-2">
        <div className="">Hello, my name is <p className="text-gradient-primary font-bold">Kurt</p>.</div>
        <div>I'm currently a Software Engineer at <div className="inline-block gradient-underline"> Amazon</div>.</div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}
