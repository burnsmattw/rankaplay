export async function GET() {
  const body = {
    webcredentials: {
      apps: ["93PUP5AUR64Y.com.Burnt.Ranka"]
    },
    applinks: {
      apps: [],
      details: [
        {
          appID: "93PUP5AUR64Y.com.Burnt.Ranka",
          paths: ["*"]
        }
      ]
    }
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}