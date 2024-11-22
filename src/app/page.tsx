export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">Class Assignment 9</h1>
      <div className="w-full max-w-[800px] min-h-[600px] p-4">
        <div className="h-[600px] px-5 content-center">
          <div className="flex flex-wrap gap-4">
            <div className="w-[355px] h-[200px] flex-grow shadow-2xl shadow-slate-300 border-2 border-slate-300 text-center content-center text-cyan-600 text-4xl rounded-lg"><span className="">Card 1</span></div>
            <div className="w-[355px] h-[200px] flex-grow shadow-2xl shadow-slate-300 border-2 border-slate-300 text-center content-center text-cyan-600 text-4xl rounded-lg"><span className="">Card 2</span></div>
          </div>
          <div className="flex flex-wrap gap-4 my-4">
            <div className="w-[231px] h-[200px] flex-grow shadow-2xl shadow-slate-300 border-2 border-slate-300 text-center content-center text-cyan-600 text-4xl rounded-lg"><span className="">Card 3</span></div>
            <div className="w-[231px] h-[200px] flex-grow shadow-2xl shadow-slate-300 border-2 border-slate-300 text-center content-center text-cyan-600 text-4xl rounded-lg"><span className="">Card 4</span></div>
            <div className="w-[231px] h-[200px] flex-grow shadow-2xl shadow-slate-300 border-2 border-slate-300 text-center content-center text-cyan-600 text-4xl rounded-lg"><span className="">Card 5</span></div>
          </div>
        </div>
      </div>
    
    </>
  );
}
