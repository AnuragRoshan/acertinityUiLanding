"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-300 to-green-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-300 to-green-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-300 to-green-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-300 to-green-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-[100vh] p-10 rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-300 to-green-900">
          <p>Random tab</p>
          <DummyContent />
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

const DummyContent = () => {
  return (
    <img
      src="https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
