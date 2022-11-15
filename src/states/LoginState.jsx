import { atom } from "recoil";
import recoilPersist from "recoil-persist";

// page가 변경되더라도 로그인 정보 유지
const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
