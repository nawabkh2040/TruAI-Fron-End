import { useLocation } from "react-router-dom";
import CountUp from "react-countup";
import PageWrapper from "../components/PageWrapper";

const Result = () => {
  const { state } = useLocation();

  if (!state || !state.result) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No result found
      </div>
    );
  }

  const { is_ai, score } = state.result;
  const percentage = Math.round(score * 100);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0B0E1A] flex items-center justify-center">
        <div className="bg-[#12182A] p-10 rounded-xl text-center w-full max-w-xl">

          <h2 className="text-3xl font-bold mb-4 text-white">
            Analysis Result
          </h2>

          <p className="text-lg text-gray-400 mb-6">
            This content is detected as:
          </p>

          <div
            className={`text-6xl font-bold mb-4 ${
              is_ai ? "text-red-500" : "text-green-400"
            }`}
          >
            {is_ai ? "AI Generated" : "Authentic"}
          </div>

          <div className="text-gray-300 text-lg mb-2">
            Confidence Level
          </div>

          <div className="text-5xl font-bold text-indigo-400">
            <CountUp end={percentage} duration={2} />%
          </div>

          <button
            onClick={() => window.location.href = "/upload"}
            className="mt-8 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Try Another File
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Result;
