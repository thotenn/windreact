import React from 'react';

const states = {
    success: {
        bgcolor: "bg-green-500",
        bordercolor: "border-green-500",
        tcolor: "text-green-500",
        title: "Éxito",
        svg: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
    },
    info: {
        bgcolor: "bg-blue-500",
        bordercolor: "border-blue-500",
        tcolor: "text-blue-500",
        title: "Info",
        svg: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
    },
    warning: {
        bgcolor: "bg-yellow-400",
        bordercolor: "border-yellow-400",
        tcolor: "text-yellow-500",
        title: "Atención",
        svg: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
    },
    error: {
        bgcolor: "bg-red-500",
        bordercolor: "border-red-500",
        tcolor: "text-red-500",
        title: "Error",
        svg: "M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
    },
};

const Alert = ({ title, desc, type = "success", darkMode = false, show = true, exit = false, close = () => { } }) => {
    return (show
        ? <div
            className={`relative flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} dark:bg-gray-800"`}
            role="alert"
        >
            <div className={`flex items-center ${states[type].bgcolor} justify-center w-12`}>
                <svg
                    className={`w-6 h-6 ${darkMode ? "text-black" : "text-white"} fill-current`}
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d={states[type].svg}
                    />
                </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className={`font-semibold ${states[type]['tcolor']} dark:text-green-400`}
                    >{title || states[type].title}</span
                    >
                    {desc &&
                        <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}>
                            {desc}
                        </p>}
                </div>
            </div>
            {exit
                && <span
                    className="absolute top-0 bottom-0 right-0 px-4 py-1"
                    onClick={close}
                >
                    <svg
                        className={`fill-current h-5 w-5 ${states[type]['tcolor']} border-2 rounded-full ${states[type].bordercolor}`}
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <title>Cerrar</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>}
        </div>
        : <></>
    )
}

export default Alert;