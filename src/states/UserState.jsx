import { atom } from "recoil";

// page가 변경되더라도 로그인 정보 유지
//const { persistAtom } = recoilPersist();

export const userName = atom({
  key: "name",
  default: "OOO",
});

export const userBirthDay = atom({
  key: "birthday",
  default: "",
});

export const userEmail = atom({
  key: "email",
  default: "",
});

export const userEmailConfirm = atom({
  key: "emailconfirm",
  default: "",
});

export const userPassword = atom({
  key: "password",
  default: "",
});

export const userPasswordConfirm = atom({
  key: "passwordconfirm",
  default: "",
});

export const userNickname = atom({
  key: "nickname",
  default: "",
});

export const userProfile = atom({
  key: "profile",
  default:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
});
