import { useRecoilState, useRecoilValue } from "recoil";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  errorAtom,
  firstNameAtom,
  lastNameAtom,
  passwordAtom,
  usernameAtom,
  sourceAtom,
} from "../atom";
import { RecoilState } from "recoil";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [error, setError] = useRecoilState(errorAtom);

  const source = useRecoilValue(sourceAtom);

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <h1>Sign up</h1>

          <h3>Enter your infromation to create an account</h3>
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Enter first name (min 3 char)"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Enter last name  (min 3 char)"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter email address"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password (min 6 char)"
            label={"Password"}
          />

          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  const response = await axios.post(
                    `${source}/data/user/signup`,
                    {
                      username,
                      firstName,
                      lastName,
                      password,
                    }
                  );
                  if (response.status === 200) {
                    // const userName = response.data.username;
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);
                    // setUsername(userName);
                    navigate("/home");
                  }
                } catch (error) {
                  setError(error.response.data.message);
                }
              }}
              label={"Sign up"}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
