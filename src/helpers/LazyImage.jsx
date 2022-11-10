import { useState, useRef, useEffect } from 'react';


export function LazyImage(imageProps){
    const [shouldLoad, setShouldLoad] = useState(false);
    const placeholderRef = useRef(null);
    useEffect(()=>{
        if(!shouldLoad && placeholderRef.current){
            const observer = new IntersectionObserver(([{intersectionRatio}])=>{
            if(intersectionRatio > 0){
                setShouldLoad(true);
            }
        });

        observer.observe(placeholderRef.current);
            return () => observer.disconnect();
        }
    }, [shouldLoad, placeholderRef]);

    return (
        shouldLoad ? <img {...imageProps} alt="" /> : <div className="img-placeholder" ref={placeholderRef} />
    );
};
