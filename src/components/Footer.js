const Footer = () => {
    return(
        <footer className="bg-gray-800 border-gray-200 px-2 py-2.5 fixed bottom-0 left-0 w-full">
            <div className="container flex flex-wrap justify-evenly items-center mx-auto text-white">
                <span className="flex flex-row">Coded by&nbsp;<a href="https://github.com/tatoline" className="text-blue-700">Tatoline</a></span>
                <spam className="flex flex-row">Open Source React Project on&nbsp;<a href="https://github.com/tatoline/covid-19_tracking_app" className="text-blue-700">GitHub</a></spam>
            </div>
        </footer>
    )
}

export default Footer