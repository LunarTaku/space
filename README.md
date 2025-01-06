# Space

Space is an image board project for Discord. Users can upload images, and they show up on the website. It's that easy.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Upload images through Discord
- Display uploaded images on the website
- User-friendly interface
- Responsive design

## Installation

To get started with Space, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/LunarTaku/space.git
cd space
```

2. **Install dependencies:**

Make sure you have Node.js and npm installed. Then run:

```bash
bun install
```

## Usage

To run the project locally, use the following command:

```bash
bun run dev
```

This will start a development server, and you can view the project in your browser at `http://localhost:3000`.

## Deployment

To deploy the project, follow these steps:

1. **Build the project:**

```bash
bun run build
```

This will generate the production-ready files in the `public` directory.

2. **Serve the project:**

You can use any static file server to serve the `public` directory. For example, using `serve`:

```bash
bun install -g serve
serve -s public
```

Alternatively, you can deploy the project to platforms like Vercel, Netlify, or any other static site hosting provider by following their deployment instructions.

## Contributing

We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

Please make sure your code follows our coding conventions and passes all tests. 

## License

This project is licensed under the GPL 3.0 License. See the [LICENSE](LICENSE) file for details.
