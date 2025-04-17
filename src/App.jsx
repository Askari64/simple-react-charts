function App() {
  return (
    <>
      <div className="min-h-dvh w-full bg-[#003049] text-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-center mt-12 text-xl md:text-2xl lg:text-4xl mb-12">
            Simple React Charts
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <p className="text-center bg-[#669bbc] rounded-xl p-6">Placeholder for Chart 1</p>
            <p className="text-center bg-[#669bbc] rounded-xl p-6">Placeholder for Chart 2</p>
            <p className="text-center bg-[#669bbc] rounded-xl p-6">Placeholder for Chart 3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
