const Loading = () => {
    return(
        <div className="inline-flex px-4 py-2 font-semibold leading-6 text-xl justify-center w-full text-cyan-950 hover:text-cyan-800 transition ease-in-out duration-150 animate-pulse cursor-not-allowed">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>Loading...
        </div>
    )
}

export default Loading