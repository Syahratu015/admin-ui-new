import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignIn() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••••••"
              name="password"
            />
          </div>

          <div className="mb-3">
            <CheckBox
              label="Keep me signed in"
              id="status"
              name="status"
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign in with
        </div>
      </div>
      {/* teks end */}

      {/* sign in with google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              {/* path tetap */}
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign in with google end */}
    </>
  );
}

export default FormSignIn;
