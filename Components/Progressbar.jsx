
const Progressbar = ({ work, length }) => {
    return (
        <>
            <div className="flex justify-between">
                <div className="mb-1 text-sm dark:text-white">{work}</div>
                <div className="mb-1 text-sm dark:text-white">{length}</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-500/50 h-2.5 rounded-full dark:bg-blue-500/50" style={{ width: length }}></div>
            </div>
        </>
    )
}

export default Progressbar
