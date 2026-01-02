import { useLocation, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import PageWrapper from "../components/PageWrapper";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🔒 Guard: if user refreshes or lands directly
  if (!state || !state.result) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xl mb-4">No result data found</p>
          <button
            onClick={() => navigate("/upload")}
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Upload Again
          </button>
        </div>
      </PageWrapper>
    );
  }

  const { result } = state;
  const isVideo = result.type === "video";

  const isAI = isVideo
    ? result.summary?.decision
    : result.is_ai;

  const confidence = isVideo
    ? Math.round(result.summary?.avg_score * 100)
    : Math.round(result.score * 100);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0B0E1A] flex items-center justify-center px-4">
        <div className="bg-[#12182A] w-full max-w-xl rounded-xl p-8 text-center">

          <h2 className="text-3xl font-bold text-white mb-4">
            Analysis Result
          </h2>

          <p className="text-gray-400 mb-6">
            This content is detected as:
          </p>

          <div
            className={`text-5xl font-bold mb-4 ${
              isAI ? "text-red-500" : "text-green-400"
            }`}
          >
            {isAI ? "AI Generated" : "Authentic"}
          </div>

          <div className="text-gray-300 text-lg mb-4">
            Confidence Level
          </div>

          <div className="text-5xl font-bold text-indigo-400">
            <CountUp end={confidence} duration={2} />%
          </div>

          {isVideo && (
            <div className="mt-6 text-sm text-gray-400 space-y-1">
              <p>Frames analyzed: {result.frames?.length}</p>
              <p>Max AI confidence: {(result.summary?.max_score * 100).toFixed(1)}%</p>
            </div>
          )}

          <button
            onClick={() => navigate("/upload", { replace: true })}
            className="mt-8 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Try Another File
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Result;
