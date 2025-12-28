import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import LetterGlitch from "../components/LetterGlitch";
import { checkImage, checkVideo } from "../api/detection";

const Processing = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!state?.file || !state?.type) {
      navigate("/upload", { replace: true });
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    const runDetection = async () => {
      try {
        let result;

        if (state.type === "image") {
          result = await checkImage(state.file);
        } else {
          result = await checkVideo(state.file);
        }

        navigate("/result", {
          replace: true,
          state: { result, type: state.type }
        });
      } catch (error) {
        console.error("Detection error:", error);

        navigate("/upload", {
          replace: true,
          state: { error: "Detection failed. Please try again." }
        });
      }
    };

    runDetection();
  }, [navigate, state]);

  return (
    <PageWrapper>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette
          outerVignette={false}
          smooth
          className="w-full h-full"
        />
      </div>

      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6" />

          <p className="text-lg font-medium">Analyzing media...</p>
          <p className="text-sm text-gray-400 mt-1">
            Detecting authenticity patterns
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Processing;
