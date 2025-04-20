import "../styles/App.css";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[var(--color-green-200)]">
      <div className="card bg-white text-primary-content w-2/5 h-3/4">
        <div className="card-body m-3">
          <h2 className="mb-2 card-title text-3xl text-[var(--color-grey-900)]">
            Contact Us
          </h2>
          <fieldset className="fieldset flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between gap-5">
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
                <span className="text-[var(--color-green-600)] text-xl">*</span>
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
                <span className="text-[var(--color-green-600)] text-xl">*</span>
              </label>
              <div className="flex gap-4">
                <label
                  className="validator flex items-center gap-4 p-2 w-1/2 border rounded-lg cursor-pointer 
                  text-xl text-[var(--color-grey-900)] 
                border-[var(--color-grey-500)] 
                  focus-within:outline-0 focus-within:ring-1 focus-within:ring-[var(--color-green-600)] 
                user-invalid:border-[var(--color-red)] user-invalid:focus-within:ring-[var(--color-red)]"
                >
                  <input
                    type="radio"
                    name="queryType"
                    value="general"
                    className="radio radio-sm ml-5"
                    required
                  />
                  <span>General Enquiry</span>
                </label>

                <label
                  className="validator flex items-center p-2 gap-2 w-1/2 border rounded-lg cursor-pointer 
                  text-xl text-[var(--color-grey-900)] 
                border-[var(--color-grey-500)] 
                  focus-within:outline-0 focus-within:ring-1 focus-within:ring-[var(--color-green-600)] 
                user-invalid:border-[var(--color-red)] user-invalid:focus-within:ring-[var(--color-red)]"
                >
                  <input
                    type="radio"
                    name="queryType"
                    value="support"
                    className="radio radio-sm ml-5"
                  />
                  <span>Support Request</span>
                </label>
              </div>

              {/* <p className="validator-hint text-sm -mb-2">
                Please select a query type
              </p> */}
              {/* I'm having issue with the validator hint above :( Idk how to fix it*/}
            </div>
          </fieldset>
          <div className="card-actions justify-center items-center h-12">
            <button className="btn w-full h-full bg-[var(--color-green-600)] rounded-lg">
              <p className="text-lg text-white">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
