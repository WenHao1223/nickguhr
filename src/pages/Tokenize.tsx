import InputSelectToken from "@/components/input/InputSelectToken";
import InputFixToken from "@/components/input/InputFixToken";

import { useState } from "react";
import Swal from "sweetalert2";

function Tokenize () {
  const currentdate = new Date();
  const padZero = (num: number) => (num < 10 ? '0' + num : num);
  const date = padZero(currentdate.getDate()) + "/" 
      + padZero(currentdate.getMonth() + 1) + "/" 
      + currentdate.getFullYear() + " " 
      + padZero(currentdate.getHours()) + ":" 
      + padZero(currentdate.getMinutes()) + ":" 
      + padZero(currentdate.getSeconds());

  const validate = () => {
    let timerInterval;
    Swal.fire({
      title: "Validating Asset...",
      html: "This process may take a few seconds.<br><b></b>",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        // const timer = Swal.getPopup().querySelector("b");
        // timerInterval = setInterval(() => {
        //   timer.textContent = `${Swal.getTimerLeft()}`;
        // }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      Swal.fire({
        title: "Validation Successful!",
        text: "Your asset has been validated successfully!",
        icon: "success"
      });
    });

    document.getElementById("fileUpload")?.setAttribute("disabled", "true");
    document.getElementById("fileUpload")?.classList.add("cursor-not-allowed");
    document.getElementById("fileUpload")?.classList.add("bg-green-400");
  }

  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);

    const fileUpload = document.getElementById("fileUpload") as HTMLButtonElement;
    if (selectedFile) {
      fileUpload.classList.remove("bg-gray-700");
      fileUpload.classList.add("bg-green-500");
    } else {
      fileUpload.classList.remove("bg-green-500");
      fileUpload.classList.add("bg-gray-700");
    }
  };

  return (
    <>
      <h1 className="font-semibold text-3xl">Add Your Asset</h1>
      <p className="text-base mt-2 mb-4 text-gray-400">Submit your proof of ownership for validation.</p>

      {/* Asset's name */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="assetName">
          Asset's Name
        </label>
        <div className="flex justify-between items-center">
        <input
          className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-last-name"
          type="text"
          placeholder="Enter your asset's name"/>
        </div>
      </div>

      {/* Upload file */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="fileUpload">
          Upload File
        </label>
        <div className="flex justify-between items-center flex-row">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input file-input-bordered file-input-primary w-4/5" />
          <button
            disabled={file==null}
            id="fileUpload"
            onClick={validate} className="btn bg-gray-700 text-gray-200 w-1/4 ms-2 me-2">Validate</button>
        </div>
      </div>

      {/* Auto timestamp */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="timestamp">
          Timestamp
        </label>
        <div className="flex justify-between items-center">
          <input
            className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-last-name"
            type="text"
            value={date}
            placeholder="Enter an amount"
            disabled={true}
            readOnly={true}
          />
        </div>
      </div>
    </>
  );
}

export default Tokenize;