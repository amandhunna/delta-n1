const API = "http://localhost:4242";

export const fetchFromAPI = async (endpoint, opts) => {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};
