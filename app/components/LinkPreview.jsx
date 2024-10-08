"use client";
import React, { useEffect, useState } from "react";

const LinkPreview = ({ link }) => {
  const [previewData, setPreviewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLinkData = async () => {
      try {
        const response = await fetch(`/api/preview`, {
          method: "PUT",
          body: JSON.stringify({ link: link }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch preview");
        }
        const data = await response.json();
        console.log(data);
        setPreviewData(data);
      } catch (err) {
        console.error("Error fetching link preview:", err);
        setError("Failed to fetch preview.");
      }
    };

    if (link) {
      getLinkData();
    }
  }, [link]);

  return (
    <div>
      {error && <p>{error}</p>}
      {previewData ? (
        <div>
          <div className=" text-lg">{previewData.description}</div>
          {previewData.images?.length > 0 && (
            <img
              className="rounded-xl max-h-[600px] mt-2"
              src={previewData.images[0]}
              alt="Link preview"
            />
          )}
        </div>
      ) : (
        <p className="text-xl  h-28 text-center flex items-center justify-center text-zinc-600">
          Loading preview...
        </p>
      )}
    </div>
  );
};

export default LinkPreview;
