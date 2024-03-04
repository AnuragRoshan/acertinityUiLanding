"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white">
          <p className="text-slate-700">Product Tab</p>
          {/* <DummyContent /> */}
          <img
            src="https://cdn.pixabay.com/photo/2018/02/03/02/40/technology-3126814_1280.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-white">
          <p className="text-slate-700">Services tab</p>
          {/* <DummyContent /> */}
          <img
            src="https://cdn.pixabay.com/photo/2020/04/01/08/57/transformation-4990460_1280.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-white">
          <p className="text-slate-700">Playground tab</p>
          {/* <DummyContent /> */}
          <img
            src="https://images.unsplash.com/photo-1642432556409-9f4e2f134410?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-white">
          <p className="text-slate-700">Content tab</p>
          {/* <DummyContent /> */}
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] p-10 rounded-2xl  text-xl md:text-4xl font-bold text-white bg-white">
          <p className="text-slate-700">Random tab</p>
          <img
            src="https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-max md:h-[40rem] py-16 [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
