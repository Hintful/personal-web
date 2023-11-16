const Contact = () => {
    return ( 
        <div className="flex-col mt-48 text-white h-[60vh]">
            <div className="relative z-0 -mb-36 rounded-full blur-[128px] opacity-100 w-48 h-48 bg-blue-500 top-20 left-40" />
            <div className="relative z-0 -mb-36 rounded-full blur-[96px] opacity-75 w-36 h-48 bg-purple-300 top-20 -left-10" />
            <div className="">
                {/* <span className="text-4xl font-bold tracking-tighter opacity-80">
                    Contact Me
                </span> */}
            </div>
            <div className="flex flex-col items-center space-y-2">
                <button type="button" className="text-white z-10 bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077b5]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#0077b5]/30 me-2">
                    <svg className="w-6 h-6 me-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                    </svg>
                    <span className="font-semibold tracking-tight">LinkedIn</span>
                </button>
                <button type="button" className="text-white z-10 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="font-semibold tracking-tight">GitHub</span>
                </button>
                <button type="button" className="text-white z-10 bg-[#7f41b9] hover:bg-[#7f41b9]/90 focus:ring-4 focus:outline-none focus:ring-[#7f41b9]/50 font-medium rounded-lg text-sm px-3.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#7f41b9]/30 me-2">
                    <svg class="w-6 h-6 me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>

                    <span className="font-semibold tracking-tight">Copy e-mail</span>
                </button>
            </div>
            
        </div>
     );
}
 
export default Contact;