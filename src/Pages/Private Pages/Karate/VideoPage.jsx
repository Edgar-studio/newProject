import React, { memo, useMemo, useState } from 'react';

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Child component for displaying kentTver
const KentTverDisplay = memo(({ kentTver }) => {
    console.log("KentTverDisplay is rendered");
    return <p>Kent Tver: {kentTver.join(', ')}</p>;
});

const VideoPage = memo(() => {
    const [edited, setEdited] = useState(false);

    const kentTver = useMemo(() => {
        console.log("KentTver is rendered");
        return arr1.filter(num => num % 2 !== 0);


    }, [edited]);




    return (
        <div>
            this is my memo page
            <button
                onClick={() => {
                    setEdited(!edited);
                }}
            >
                Show Kent Tver
            </button>
            <KentTverDisplay kentTver={kentTver} />
        </div>
    );
});

export default VideoPage;