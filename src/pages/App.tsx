import { useState } from "react";

import "../styles/App.css";

export default function App() {
  const [queryType, setQueryType] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    if (form.checkValidity() && queryType) {
      // All valid, do something
      setShowAlert(true);
    }
  };

  const isSelected = (value: string) => queryType === value;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center h-screen w-screen bg-[var(--color-green-200)]"
      >
        {showAlert && (
          <div
            role="alert"
            className="alert absolute z-1 -translate-y-90 alert-success flex flex-col items-start
            bg-[var(--color-grey-900)] text-white"
          >
            <div className="flex flex-row gap-2 items-center -mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Message Sent!</span>
            </div>
            <p className="text-gray-300">
              Thanks for completing the form. We'll be in touch soon!
            </p>
          </div>
        )}
        <div className="card bg-white text-primary-content lg:w-3/6 lg:h-6/7">
          <div className="card-body m-2">
            <h2 className="card-title mb-2 text-3xl text-[var(--color-grey-900)]">
              Contact Us
            </h2>
            <fieldset className="fieldset flex flex-col w-full gap-1">
              <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="w-full">
                  <label className="label text-lg mb-1 text-[var(--color-grey-900)]">
                    First Name{" "}
                    <span className="text-[var(--color-green-600)] text-xl">
                      *
                    </span>
                  </label>
                  <input
                    type="input"
                    className="input validator w-full text-xl p-6 text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                    required
                  />
                  <p className="validator-hint text-sm -mb-2">
                    This field is required
                  </p>
                </div>

                <div className="w-full">
                  <label className="label text-lg mb-1 text-[var(--color-grey-900)]">
                    Last Name{" "}
                    <span className="text-[var(--color-green-600)] text-xl">
                      *
                    </span>
                  </label>
                  <input
                    type="input"
                    className="input validator w-full text-xl p-6 text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                    required
                  />
                  <p className="validator-hint text-sm -mb-2">
                    This field is required
                  </p>
                </div>
              </div>

              <div>
                <label className="label text-lg mb-1 text-[var(--color-grey-900)]">
                  Email Address{" "}
                  <span className="text-[var(--color-green-600)] text-xl">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  pattern=".*@.*\.com"
                  className="input validator w-full text-xl p-6 text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                  required
                />
                <p className="validator-hint text-sm -mb-2">
                  Please enter a valid email address
                </p>
              </div>

              <div>
                <label className="label text-lg mb-1 text-[var(--color-grey-900)]">
                  Query Type{" "}
                  <span className="text-[var(--color-green-600)] text-xl">
                    *
                  </span>
                </label>
                <div className="flex gap-4">
                  <label
                    className={`validator flex items-center gap-4 p-2 w-1/2 border rounded-lg cursor-pointer 
                  text-xl text-[var(--color-grey-900)] border-[var(--color-grey-500)] 
                  focus-within:outline-0 focus-within:ring-1 focus-within:ring-[var(--color-green-600)] 
                user-invalid:border-[var(--color-red)] user-invalid:focus-within:ring-[var(--color-red)] 
                  ${
                    isSelected("general") ? "bg-[var(--color-green-200)]" : ""
                  }`}
                  >
                    <input
                      type="radio"
                      name="queryType"
                      value="general"
                      className="radio radio-sm ml-5"
                      required
                      checked={queryType === "general"}
                      onChange={() => setQueryType("general")}
                    />
                    <span>General Enquiry</span>
                  </label>

                  <label
                    className={`validator flex items-center gap-4 p-2 w-1/2 border rounded-lg cursor-pointer 
                  text-xl text-[var(--color-grey-900)] border-[var(--color-grey-500)] 
                  focus-within:outline-0 focus-within:ring-1 focus-within:ring-[var(--color-green-600)] 
                user-invalid:border-[var(--color-red)] user-invalid:focus-within:ring-[var(--color-red)] 
                  ${
                    isSelected("support") ? "bg-[var(--color-green-200)]" : ""
                  }`}
                  >
                    <input
                      type="radio"
                      name="queryType"
                      value="support"
                      className="radio radio-sm ml-5"
                      checked={queryType === "support"}
                      onChange={() => setQueryType("support")}
                    />
                    <span>Support Request</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="label text-lg mb-1 text-[var(--color-grey-900)]">
                  Message{" "}
                  <span className="text-[var(--color-green-600)] text-xl">
                    *
                  </span>
                </label>
                <textarea
                  className="textarea validator resize-none input w-full text-xl p-6 text-[var(--color-grey-900)]
                  focus:outline-0 h-full focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                  required
                />
                <p className="validator-hint text-sm -mb-3">
                  This field is required
                </p>
              </div>

              <div>
                <div className="flex flex-row mt-5 items-center w-full">
                  <div className="flex flex-col h-full">
                    <input
                      type="checkbox"
                      className="checkbox validator checked:bg-[var(--color-green-200)] rounded-none"
                      required
                      title="Required"
                    />
                    <p className="validator-hint text-sm">Required</p>
                  </div>
                  <label className="label text-lg -ml-5 -mt-5 h-full mb-1 text-[var(--color-grey-900)]">
                    I consent to being contacted by the team
                    <span className="text-[var(--color-green-600)] text-xl">
                      *
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="card-actions justify-center items-center h-12 -mt-2">
              <button className="btn w-full h-full bg-[var(--color-green-600)] rounded-lg">
                <p className="text-lg text-white">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
