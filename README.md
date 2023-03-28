# AI Image Generator using OpenAI

Ai Image Generator is a minimal Frontend to handle AI suggestions and image generation using OpenAI API and Microsoft Azure Web Services. 
<br/>
Main motive behind this project is to have a understand and learn workings of OpenAI API's and usage of Azure functions and Azure Storage.

![DALL E-2 0-next js](https://user-images.githubusercontent.com/99337222/228240917-7cd3fcc3-a42a-4031-af9d-82af880658e9.png)

<br/>

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Authors](#authors)
5. [License](#license)

<br/>

# Demo

[Live demo](https://dall-e-2-0-image-generator.vercel.app/)

<br/>

# Installation

- Fork or directly clone this repository to your local machine
- Use `npm install` command to install dependencies
- Create new _.env.local_ file and add OpenAI API keys
- Create Microsoft Azure functions and storage
- Once the dependencies are installed and Azure resources are being setup, use `npm run dev` command inside the root directory to open the app in your local browser of choice

<br/>

# Technology Stack

I have used Next.js on client side to develop Frontend and make server side api calls to Microsoft Azure Functions and storage blobs. Azure Functions handle the prompt input and API calls and responses from OpenAI API. Images generated from the prompts through OpenAI API's are the stored in Azure Storage Containers.

- [Next Js](https://nextjs.org/)
- [Microsoft Azure Web Services](https://azure.microsoft.com/en-us/)
- [OpenAI](https://openai.com/)
- [DALL-E 2.0](https://openai.com/product/dall-e-2)
- [SWR](https://swr.vercel.app/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Tailwind](https://tailwindcss.com/)

<br/>

# Authors

- [Ashirwad Shetye](https://github.com/Ashirwad-Shetye)

<br/>

# Credits

- [Sonny Sangha](https://github.com/Ashirwad-Shetye) - Thanks for motivating and guiding to build this project.

<br/>

# License

[MIT](https://opensource.org/licenses/MIT)
