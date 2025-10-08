import React, { useState, useEffect } from "react";
import doorImg from "../assets/home/door.jpg";

export default function ReCaptchaMini() {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(new Set());
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  // sample images (replace with your URLs)
  const images = [
    { id: 1, src: doorImg , label: "Fan 1" },
    { id: 2, src: doorImg , label: "Fan 2" },
    { id: 3, src: doorImg , label: "Other" },
  ];

  // open modal when checked; reset error/selection
  useEffect(() => {
    if (checked) {
      setSelected(new Set());
      setError("");
      setShowModal(true);

      // optional: expire after 45s
      const t = setTimeout(() => {
        setError("Verification challenge expired. Check the checkbox again.");
        setChecked(false);
        setShowModal(false);
        setSelected(new Set());
      }, 45000);
      return () => clearTimeout(t);
    }
  }, [checked]);

  function toggleSelect(id) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  }

  function verify() {
    if (selected.size === 0) {
      setError("Please select at least one image.");
      return;
    }
    // Example: success -> close modal and keep checkbox checked
    setShowModal(false);
    setError("");
    // in real usage, send selected ids to server for verification
    console.log("selected ids:", Array.from(selected));
  }

  return (
   <div className="h-auto bg-gray-700 p-8 flex flex-col items-center">
      <div className="mb-8 flex items-start space-x-4">
        <div className="bg-white p-2 border-2 rounded shadow-lg w-72 relative">
          {error ? (
            <p className="text-red-600 text-sm mb-2">{error}</p>
          ) : (
            <div style={{ height: 18 }} />
          )}

          <div className="flex items-center space-x-2">
            <div
              onClick={() => setChecked((c) => !c)}
              role="checkbox"
              aria-checked={checked}
              className={`w-5 h-5 border-2 ${error ? "border-red-500" : "border-gray-300"} bg-white flex items-center justify-center cursor-pointer`}
            >
              {checked && <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
            </div>

            <span className="text-gray-800 text-base">I'm not a robot</span>

            <div className="ml-auto flex flex-col items-center">
              <div className="w-10 h-10 bg-purple-200 border border-gray-300 rounded-sm mb-1" />
              <span className="text-xs text-gray-500">reCAPTCHA</span>
            </div>
          </div>
        </div>

        <button className="bg-gray-800 text-gray-400 font-semibold py-2 px-6 rounded shadow-md hover:bg-gray-900 mt-1">Send</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => { setShowModal(false); setChecked(false); }} />
          <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 max-w-xl w-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg">Select all images with a fan</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded" onClick={() => { setShowModal(false); setChecked(false); }}>Cancel</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={verify}>Verify</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {images.map(img => {
                const isSel = selected.has(img.id);
                return (
                  <div
                    key={img.id}
                    className="relative cursor-pointer rounded overflow-hidden border border-gray-200"
                    onClick={() => toggleSelect(img.id)}
                  >
                    {/* Image */}
                    <img src={img.src} alt={img.label} className="w-full h-28 object-cover" />

                    {/* Dark overlay when selected */}
                    {isSel && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-3">This challenge will expire in 45 seconds.</p>
          </div>
        </div>
      )}
    </div>
  );
}
