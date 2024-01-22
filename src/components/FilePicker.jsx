import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          بارگذاری فایل
        </label>

        <p className="mt-2 text-gray-500 text-sm truncate">
          {file === "" ? "فایلی انتخاب نشده است" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => readFile("logo")}
          className="w-fit flex-1 rounded-md px-4 py-2.5 font-bold text-xs"
          style={{
            border: `1px solid ${getContrastingColor(snap.color)}`,
            color: getContrastingColor(snap.color),
          }}
        >
          لوگو
        </button>
        <button
          onClick={() => readFile("full")}
          className="w-fit flex-1 rounded-md px-4 py-2.5 font-bold text-xs"
          style={{
            background: snap.color,
            color: getContrastingColor(snap.color),
          }}
        >
          زمینه
        </button>
      </div>
    </div>
  );
};

export default FilePicker;
