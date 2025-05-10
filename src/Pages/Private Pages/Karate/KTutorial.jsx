import React, {useMemo, useState} from 'react';
import VideoPage from "./VideoPage.jsx";
import ScrollBackgroundChange from "./ScrollBackgroundChange.jsx";

const KTutorial = () => {
    const [number, setNumber] = useState(0);
    const [edited, setEdited] = useState(false);
    let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


    const zuygTver = useMemo(() => {
        const tver = arr1.filter(num => num % 2 === 0);
        // console.log(tver);
        return tver
    }, [edited])

    return (
        <div className="w-full min-h-full flex-col gap-10 flex items-center justify-center">
            <div>{number}</div>

            <button
            onClick={() => {
                setNumber(number + 1);
            }}
            >Add</button>

            <button
            onClick={() => {
                arr1.push(number);
                setEdited(!edited);
            }}>
                Att to list
            </button>

            <ul>
                {zuygTver.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <VideoPage />
            <ScrollBackgroundChange />
        </div>
    );
};

export default KTutorial;