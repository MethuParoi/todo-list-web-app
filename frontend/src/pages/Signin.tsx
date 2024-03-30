import { useRecoilState, useRecoilValue } from "recoil";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { passwordAtom, usernameAtom, errorAtom, sourceAtom } from "../atom";
import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const source = useRecoilValue(sourceAtom);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <h1>Sign in</h1>
          <h3>Enter your credentials to sign in</h3>
          <InputBox
            placeholder="Enter email"
            label={"Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            placeholder="Enter password"
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              onClick={() => {
                axios
                  .post(`${source}/data/user/signin`, {
                    username,
                    password,
                  })
                  .then((response) => {
                    if (response.status === 200) {
                      localStorage.setItem("token", response.data.token);
                      localStorage.setItem("userId", response.data.userId);

                      // const userName = response.data.firstName;
                      // setRecoilUsername(userName);

                      navigate("/home");
                    }
                  })
                  .catch((error) => {
                    // Handle error
                    setSuccess(false);
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      setError(error.response.data.message);
                    } else if (error.request) {
                      // The request was made but no response was received
                      setError("Network error, please try again later.");
                    } else {
                      // Something else happened in making the request
                      setError("An unexpected error occurred.");
                    }
                  });
              }}
              label={"Sign in"}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Sign-in successful!</p>}

          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
