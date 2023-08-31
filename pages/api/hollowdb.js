import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function put(
  key,
  encryptedSymmetricKey,
  encryptedData,
  accessControlConditions
) {
  const data = {
    encryptedSymmetricKey: encryptedSymmetricKey,
    encryptedData: encryptedData,
    accessControlConditions: accessControlConditions,
  };
  const payload = {
    key: key,
    value: data,
  };
  console.log("payload: ", payload);
  return axiosClient.post("/put", payload);
}

export function get(key) {
  return axiosClient.get("/get/" + key);
}
