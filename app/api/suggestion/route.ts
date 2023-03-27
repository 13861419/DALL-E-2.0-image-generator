export async function GET(request: Request) {
  const response = await fetch(
    "https://ai-image-generator-next-js.azurewebsites.net/api/getChatGPTSuggestion?",
    {
      cache: "no-store",
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
