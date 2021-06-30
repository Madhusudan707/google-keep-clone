export const useBaseURL = () => {
  const host = window.location.hostname;
  const localDomain = "http://localhost:";
  const port = "3003";
  const local = `${localDomain}${port}`;
  const remote = "https://nano-notes-backend.maddydev.repl.co";

  const baseURL = host === "localhost" ? local : remote;

  return { baseURL };
};
