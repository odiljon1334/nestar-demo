import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
    const [device, setDevice] = useState<string>("desktop");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setDevice(isMobile ? "mobile" : "desktop");
    }, [device]); // Faqat bir marta ishlaydi

    return device;
};

export default useDeviceDetect;
