const HeroTimelineItem = (props) => {
    return (  
        <div>
            <li class="ms-7">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900" />
                <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-white">{ props.main }</h3>
                <time class="block mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ props.sub }</time>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">{ props.content }</p>
            </li>
        </div>
    );
}
 
export default HeroTimelineItem;