import React, { Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CircularBillBoard = React.lazy(() => import("../components/showProjects/CircularBillBoard"));

const ProjectsPage = () => {
    useGSAP(() => {
      gsap.from("#ThreeDModel", {
        opacity: 0,
        // delay: 1,
        duration: 3
      })
    })
    return (
            <div id="ThreeDModel" className="w-full h-dvh">
                {/* <Suspense fallback={<Loading />}> */}
                    <CircularBillBoard />
                {/* </Suspense> */}
            </div>
    )
}

export default ProjectsPage