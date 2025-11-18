import { create } from "zustand";

interface UserDetail {
  name: string;
  surname: string;
}

interface State {
  userDetail: UserDetail | null;
}

interface Actions {
  setUserDetail: (userDetail: State["userDetail"]) => void;
}

const useUserStore = create<State & Actions>()((set) => ({
  setUserDetail: (userDetail) => { set({ userDetail }); },
  userDetail: null,
}));

export default useUserStore;
