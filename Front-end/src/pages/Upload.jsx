import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import logo from "../assets/logo-CX2Yl9fi.png";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("image");
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleFile = (file) => {
    if (!file) return;
    setFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    navigate("/processing", { state: { file, type }, replace: true });
  };

  return (
    <PageWrapper>
      {/* NAVBAR */}
      <nav onClick={()=>navigate("/")} className="fixed top-0 left-0 w-full z-50 bg-[#0B0E1A]/80 backdrop-blur-md px-6 py-4 flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-white text-xl font-semibold">
          TruAI — Media Authenticity
        </h1>
      </nav>

      {/* CONTENT */}
      <div className="min-h-screen bg-[#0B0E1A] flex items-center justify-center pt-28 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-[#12182A] rounded-2xl p-8"
        >
          <h2 className="text-white text-3xl font-semibold text-center mb-6">
            Upload Media
          </h2>

          {/* TYPE SELECT */}
          <div className="flex justify-center gap-4 mb-6">
            {["image", "video"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-6 py-2 rounded-full transition ${
                  type === t
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* DROP ZONE */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
              dragActive
                ? "border-indigo-500 bg-indigo-500/10"
                : "border-gray-600"
            }`}
          >
            <input
              type="file"
              hidden
              id="fileInput"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <p className="text-gray-300">
                Drag & drop your file or{" "}
                <span className="text-indigo-400 underline">browse</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Supported: JPG, PNG, MP4
              </p>
            </label>
          </div>

          {/* PREVIEW */}
          {file && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6"
            >
              <p className="text-sm text-gray-400 mb-2">Preview</p>
              {file.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="rounded-lg max-h-60 mx-auto"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="rounded-lg max-h-60 mx-auto"
                />
              )}
            </motion.div>
          )}

          <button
            onClick={handleAnalyze}
            className="mt-8 w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition font-semibold"
          >
            Analyze Media
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Your files are processed securely and never stored.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Upload;
