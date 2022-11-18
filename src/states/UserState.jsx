import { atom } from "recoil";

export const NameState = atom({
  key: "NameState",
  default: "OOO",
});

export const BirthDayState = atom({
  key: "BirthDayState",
  default: "",
});

export const EmailState = atom({
  key: "EmailState",
  default: "",
});

export const EmailConfirmState = atom({
  key: "EmailConfirmState",
  default: "",
});

export const PasswordState = atom({
  key: "PasswordState",
  default: "",
});

export const PasswordConfirmState = atom({
  key: "PasswordConfirmState",
  default: "",
});

export const NicknameState = atom({
  key: "NicknameState",
  default: "",
});

export const ProfileState = atom({
  key: "ProfileState",
  default:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
});
