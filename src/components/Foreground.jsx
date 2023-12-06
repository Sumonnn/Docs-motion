import { useRef } from "react";
import Card from "./Card";




function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            id:1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize: '.9mb',
            close: false,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
        },
        {
            id:2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize: '.4mb',
            close: true,
            tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },
        },
        {
            id:3,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize: '.9mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'blue' },
        },
    ];


    return (
        <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
            {
                data.map((item) => {
                    return <Card data={item} key={item.id} reference={ref} />
                })
            }
            {/* <Card /> */}
        </div>
    )
}

export default Foreground;