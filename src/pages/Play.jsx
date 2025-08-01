import React, { Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Loading } from "../components/index";

const CircularBillBoard = React.lazy(
    () => import("../components/3dModels/CircularBillBoard"),
);

const ProjectsPage = () => {
    useGSAP(() => {
        gsap.from("#ThreeDModel", {
            opacity: 0,
            duration: 1,
            ease: "power1.in",
        });
    },[]);
    return (
        <div id="ThreeDModel" className="h-dvh w-full">
            <Suspense fallback={<Loading />}>
                <CircularBillBoard />
            </Suspense>
        </div>
    );
};

export default ProjectsPage;
