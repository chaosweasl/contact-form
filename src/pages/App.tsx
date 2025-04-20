import "../styles/App.css";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[var(--color-green-200)]">
      <div className="card bg-white text-primary-content w-2/5 h-3/4">
        <div className="card-body m-3">
          <h2 className="mb-2 card-title text-3xl text-[var(--color-grey-900)]">
            Contact Us
          </h2>
          <fieldset className="fieldset rounded-box flex flex-col w-full gap-2">
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
                  className="input validator w-full text-xl text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                  required
                />
                <p className="validator-hint text-sm">This field is required</p>
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
                  className="input validator w-full text-xl text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                  required
                />
                <p className="validator-hint text-sm">This field is required</p>
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
                className="input validator w-full text-xl text-[var(--color-grey-900)]
                  focus:outline-0 focus:ring-1 focus:ring-[var(--color-green-600)]
                  border-[var(--color-grey-500)] rounded-lg
                  user-invalid:border-[var(--color-red)] user-invalid:focus:ring-[var(--color-red)]"
                required
              />
              <p className="validator-hint text-sm">
                Please enter a valid email address
              </p>
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
