import Image from "next/image";
import { useState } from "react";
import { ClientReferenceManifestPlugin } from "../../node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin";

export default function Home() {
  return (
      let number = 1;
      const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      };

      const dcrement = ()=>{
        setCount(count - 1);
      }
      <h1 className="flex flex-col w-full items-center justify-center">
        +
      </h1>

    
  );
}
