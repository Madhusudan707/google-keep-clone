export const useBaseURL = () => {
  const host = window.location.hostname;
  const localDomain = "http://localhost:";
  const port = "3003";
  const local = `${localDomain}${port}`;
//   const remote = "https://startup-reads-backend.maddydev.repl.co";
const remote =""

  const baseURL = host === "localhost" ? local : remote;

  return { baseURL };
};
