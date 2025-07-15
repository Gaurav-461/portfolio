import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ElasticSvgLine = () => {
    const svgRef = useRef(null);
    const pathRef = useRef(null);

    const initialPath = "M 10 100 Q 250 100 1040 100";
    const finalPath = "M 10 100 Q 250 100 1040 100";

    useGSAP(() => {
        const svg = svgRef.current;
        const path = pathRef.current;

        if (!svg || !path) return;

        const updatePath = (e) => {
            const rect = svg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gsap.to(path, {
                attr: { d: `M 10 100 Q ${x} ${y} 1040 100` },
                duration: 1,
                ease: "elastic.out(1,0.3)"
            });
        };

        const resetPath = () => {
            gsap.to(path, {
                attr: { d: finalPath },
                duration: 1.6,
                ease: "elastic.out(1,0.3)"
            });
        };

        svg.addEventListener("mousemove", updatePath);
        svg.addEventListener("mouseleave", resetPath);

        return () => {
            svg.removeEventListener("mousemove", updatePath);
            svg.removeEventListener("mouseleave", resetPath);
        };
    }, []);

    useGSAP(() => {
        gsap.set(pathRef.current, { attr: { d: initialPath } });
    }, []);

    return (
        <section className="mt-10 w-full h-60 hidden xl:block">
            <div id="line" className="w-full h-full">
                <svg ref={svgRef} id="svgLine" className="w-full h-full overflow-visible">
                    <path ref={pathRef} stroke="white" fill="none" strokeWidth="1" />
                </svg>
            </div>
        </section>
    );
};

export default ElasticSvgLine;
