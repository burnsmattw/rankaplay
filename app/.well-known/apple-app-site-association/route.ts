export async function GET() {
  const body = {
    webcredentials: {
        apps: ["PUP5AUR64Y.Burnt.Ranka"]
    },
    applinks: {
        apps: [],
        details: [
            {
                appID: "PUP5AUR64Y.Burnt.Ranka",
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

