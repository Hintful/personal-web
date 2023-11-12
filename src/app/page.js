import HeroHeader from "./components/hero/HeroHeader";
import HeroTimeline from "./components/hero/timeline/HeroTimeline";

export default function Home() {
  return (
    <div className="flex-col mt-4 text-white space-y-16">
      <HeroHeader />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <HeroTimeline />
    </div>
  )
}
