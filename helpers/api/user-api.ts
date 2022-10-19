import { BASE_URL } from "../../constants";

const getUser = async (id: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ id, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return {
      id: data?.id,
      fname: data?.fname,
      lname: data?.lname,
    };
  } catch (e) {
    throw e;
  }
};

export { getUser };
