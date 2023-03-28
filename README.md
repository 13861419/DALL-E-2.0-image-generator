# AI Image Generator using OpenAI

Goalie is a minimal goal management platform which enables users to create and manage goals. It includes community portal to share current and completed goals with other users.
<br/>
Main motive behind Goalie is to create a social accountability to help user complete goals without any procastinations.

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
- [SWR]()
- [TypeScript]()
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
