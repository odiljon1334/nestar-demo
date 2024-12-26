import { useState } from "react";

const Community = () => {
    console.log("COMMUNITY COMPONENT - CLIENT-ROUTER");
    const [title, setTitle] = useState<string>("hello");
    return <div>Community <button onClick={() => alert("Hello MIT!")} style={{margin: "15px"}}>Press Me!</button></div>
}

export default Community;