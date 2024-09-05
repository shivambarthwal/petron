"user client"

import Card from "@/components/Card";


export default function Home() {
  
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="font-bold text-5xl"> Buy me a Project</div>
      <p> A crowd funding platform for creators. Get funded by your fans and followers</p>
      <div>
      <button type="button" 
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
        text-center me-2 mb-2">Start Here</button>
        <button type="button" 
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
        text-center me-2 mb-2">Read More</button>
      </div>
      </div>


      <div className="bg-white h-[1px] opacity-10"></div>

      <div className="text-white container mx-auto py-14">
        <h1 className="text-3xl font-bold text-center mb-10">Buy your Project</h1>
        <div className="flex gap-4 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.svg" alt="" />
            <p className="font-bold">Fund Your Self</p>
            <p className="text-center">people are availabe here</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  p-2 text-black" width={88} src="/man2.svg" alt="" />
            <p className="font-bold">Fund Your Self</p>
            <p className="text-center">people are availabe here</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man3.svg" alt="" />
            <p className="font-bold">Fans wants to help</p>
            <p className="text-center">people are availabe here</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-[1px] opacity-10"></div>

      
      <div className="text-white container mx-auto py-14 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-10">Learn More About us</h1>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/vDYP6AKw8bk?si=IGxzGjahXImH2u05"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="bg-white h-[1px] opacity-10"></div>
      <div className="flex gap-4 mx-2 mt-10">
        <Card username="Shivam barthwal" source="https://img.icons8.com/?size=80&id=108652&format=png"/>
        <Card username="Harsh sharma" source="https://img.icons8.com/?size=50&id=23265&format=png" />
        <Card username="Tilak jain" source="https://img.icons8.com/?size=80&id=42384&format=png"/>
      </div>
      </>
  );
}
